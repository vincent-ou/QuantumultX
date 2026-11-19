/* 阿里云盘签到 — 阿里云盘每日签到自动领取奖励
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = member.aliyundrive.com,auth.alipan.com,aliyundrive.alipan.com
 */
let $ = new Env("AliSignReward");
let reqHeaders = ($request && $request.headers) || {};
let requestUrl = $request && $request.url;

/* ===================== 配置 ===================== */
// 致命错误码：命中说明临时 Token 失效，需要手动重新激活
const FATAL_CODES = ["Forbidden", "InvalidSignature", "ExchangeFailed"];
// 需要持久化的请求头（用于后续自动领取）
const HEAD_KEYS = [
  "Cookie",
  "x-timestamp",
  "x-sgext",
  "x-device-id",
  "x-signature",
  "x-sign",
  "x-mini-wua",
  "Authorization",
  "x-umt",
  "x-signature-v2",
  "x-nonce",
];
// 领取接口
const EP = {
  signIn: {
    url: "https://member.aliyundrive.com/v1/activity/sign_in",
    label: "当日签到",
  },
  main: {
    url: "https://member.aliyundrive.com/v1/activity/sign_in_reward",
    label: "主奖励",
  },
  backup: {
    url: "https://member.aliyundrive.com/v2/activity/sign_in_task_reward?_rx-s=mobile",
    label: "备份奖励",
  },
};

const UA =
  "AliApp(AYSD/5.8.1) com.alicloud.smartdrive/5.8.1 Version/17.6.1 Channel/201200 Language/zh-Hans-CN /iOS Mobile/iPhone16,2";

/* ===================== 工具函数 ===================== */
// 构造自动领取用的请求头（不再写死 Content-Length，交由 HTTP 客户端计算）
const buildHeaders = () => ({
  Host: "member.aliyundrive.com",
  Cookie: $.read("Cookie"),
  "User-Agent": UA,
  "x-timestamp": $.read("x-timestamp"),
  Referer: "https://aliyundrive.com/",
  "X-Canary": "client=web,app=other,version=v0.1.0",
  "x-sgext": $.read("x-sgext"),
  "x-device-id": $.read("x-device-id"),
  Connection: "keep-alive",
  "x-signature": $.read("x-signature"),
  "x-sign": $.read("x-sign"),
  "x-mini-wua": $.read("x-mini-wua"),
  Authorization: $.read("Authorization"),
  "Accept-Language": "zh-CN,zh-Hans;q=0.9",
  "x-umt": $.read("x-umt"),
  Accept: "*/*",
  "Content-Type": "application/json; charset=UTF-8",
  "x-signature-v2": $.read("x-signature-v2"),
  "Accept-Encoding": "gzip, deflate, br",
  "x-nonce": $.read("x-nonce"),
});

// 保存本次请求里的凭证头（空值不覆盖已有有效值）
const saveHeaders = (h) => {
  const src = {};
  HEAD_KEYS.forEach((k) => {
    const v = h[k] != null ? h[k] : h[k.toLowerCase()];
    if (v != null && v !== "") src[k] = v;
  });
  HEAD_KEYS.forEach((k) => {
    if (src[k] != null) $.write(k, src[k]);
  });
};

const monthKey = () => {
  const d = new Date();
  return d.getFullYear() + "/" + (d.getMonth() + 1);
};
const todayNum = () => new Date().getDate();

const getProgress = () => {
  try {
    return JSON.parse($.read("aliSignProgress") || "{}");
  } catch (e) {
    return {};
  }
};
const setProgress = (mk, lastDay) => {
  $.write("aliSignProgress", JSON.stringify({ month: mk, lastDay: lastDay }));
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* ===================== 统一请求封装 ===================== */
// 返回 Promise<{ok, fatal, msg}>
const callApi = (type, body) =>
  new Promise((resolve) => {
    const ep = EP[type];
    const opt = {
      url: ep.url,
      method: "POST",
      headers: buildHeaders(),
      body: typeof body === "string" ? body : JSON.stringify(body),
    };
    let settled = false;
    const finish = (r) => {
      if (!settled) {
        settled = true;
        resolve(r);
      }
    };
    $.post(opt, (err, resp, body) => {
      if (err) {
        finish({ ok: false, fatal: false, msg: "网络错误" });
        return;
      }
      let data;
      try {
        data = JSON.parse(body);
      } catch (e) {
        finish({ ok: false, fatal: false, msg: "响应解析失败" });
        return;
      }
      if (data && data.code && FATAL_CODES.includes(data.code)) {
        finish({ ok: false, fatal: true, code: data.code, msg: data.message || data.code });
        return;
      }
      const desc =
        data && data.result && (data.result.description || data.result.name || data.result.signInCount);
      if (data && (data.result || (data.success && data.success !== false))) {
        finish({ ok: true, msg: desc ? String(desc) : "" });
        return;
      }
      // 有 code 但非致命（如 AlreadyDone / 已领取）→ 视为已领取，不报错
      if (data && data.code) {
        finish({ ok: true, skipped: true, msg: data.message || data.code });
        return;
      }
      finish({ ok: false, fatal: false, msg: "未知响应" });
    });
    // 兜底超时，避免请求挂死
    setTimeout(() => finish({ ok: false, fatal: false, msg: "请求超时" }), 10000);
  });

/* ===================== 主流程 ===================== */
const getAllReward = async () => {
  try {
    if (!$.read("Cookie")) {
      $.notify(
        "XiaoMao阿里云盘",
        "Token获取失败",
        "请先前往App手动领取一次奖励获取Token",
        ""
      );
      return;
    }

    const mk = monthKey();
    const today = todayNum();
    const prog = getProgress();
    let lastOkDay = prog && prog.month === mk ? prog.lastDay || 0 : 0;
    const startDay = lastOkDay + 1;

    if (startDay > today) {
      $.notify(
        "XiaoMao阿里云盘",
        "今日奖励已领取",
        "无需补领，进度已记录到 " + mk + "/" + today,
        ""
      );
      return;
    }

    // 1) 先尝试当日签到（非致命，失败仅记录）
    let signMsg = "";
    try {
      const s = await callApi("signIn", "{}");
      signMsg = s.ok ? "当日签到: 成功" : "当日签到: " + (s.msg || "跳过");
      console.log("[签到] " + signMsg);
    } catch (e) {
      console.log("[签到] 异常: " + e);
    }

    // 2) 逐天补领主奖励 + 备份奖励
    const success = [];
    const failed = [];
    let reauth = false;

    for (let day = startDay; day <= today; day++) {
      const m = await callApi("main", { signInDay: day });
      if (m.fatal) {
        reauth = true;
        failed.push("第" + day + "天主奖励: " + m.msg);
        break;
      }
      if (m.ok) {
        lastOkDay = day; // 主奖励成功即推进进度（备份奖励尽量领取，失败不阻塞）
        success.push("第" + day + "天主奖励✅");
      } else {
        failed.push("第" + day + "天主奖励: " + m.msg);
      }

      const b = await callApi("backup", { signInDay: day });
      if (b.fatal) {
        reauth = true;
        failed.push("第" + day + "天备份: " + b.msg);
        break;
      }
      if (b.ok) success.push("第" + day + "天备份✅");
      else failed.push("第" + day + "天备份: " + b.msg);

      // 每完成一天就落盘进度，即使中途被杀也能续领
      setProgress(mk, lastOkDay);
      await sleep(200 + Math.floor(Math.random() * 200));
    }

    setProgress(mk, lastOkDay);

    // 3) 汇总通知
    if (reauth) {
      $.notify(
        "XiaoMao阿里云盘",
        "云盘临时Token已失效",
        "请前往App手动领取一次奖励进行激活！\n" + failed.slice(0, 3).join("\n"),
        ""
      );
    } else {
      const summary =
        "成功 " + success.length + " 项，失败 " + failed.length + " 项" +
        (signMsg ? "\n" + signMsg : "");
      $.notify(
        "XiaoMao阿里云盘 · 领取完成",
        summary,
        failed.length ? failed.slice(0, 5).join("\n") : "全部领取成功 🎉",
        ""
      );
    }

    success.slice(0, 12).forEach((s) => console.log("🎉" + s));
    failed.slice(0, 12).forEach((f) => console.log("❌" + f));
  } catch (e) {
    console.log("[领取流程] 异常: " + e);
  }
};

/* ===================== 入口 ===================== */
if (
  requestUrl &&
  /^https:\/\/member\.aliyundrive\.com\/v1\/activity\/sign_in_reward/.test(
    requestUrl
  )
) {
  const savedTs = $.read("x-timestamp");
  const isNewToken = savedTs !== reqHeaders["x-timestamp"];
  saveHeaders(reqHeaders);

  if (isNewToken) {
    $.notify(
      "XiaoMao阿里云盘",
      "Token获取成功",
      "已记录凭证，正在自动领取奖励…",
      ""
    );
  }

  // 先放行本次请求（用原始请求头），再在后台完成领取；领取结束再 $done
  getAllReward()
    .then(() => $.done({}))
    .catch(() => $.done({}));
}

function Env(name) {
  const read = (key) => $prefs.valueForKey(key);
  const write = (key, value) => $prefs.setValueForKey(key, value);
  const notify = (title = "", subtitle = "", message = "", url = "") => {
    if (url) $notify(title, subtitle, message, { "open-url": url });
    else $notify(title, subtitle, message);
  };
  const get = (option, callback) => {
    if (typeof option === "string") option = { url: option };
    option.method = "GET";
    $task.fetch(option).then((resp) => callback(null, { status: resp.statusCode, statusCode: resp.statusCode, headers: resp.headers, body: resp.body }, resp.body)).catch((e) => callback(e, {}, null));
  };
  const post = (option, callback) => {
    if (typeof option === "string") option = { url: option };
    option.method = "POST";
    $task.fetch(option).then((resp) => callback(null, { status: resp.statusCode, statusCode: resp.statusCode, headers: resp.headers, body: resp.body }, resp.body)).catch((e) => callback(e, {}, null));
  };
  const put = (option, callback) => {
    if (typeof option === "string") option = { url: option };
    option.method = "PUT";
    $task.fetch(option).then((resp) => callback(null, { status: resp.statusCode, statusCode: resp.statusCode, headers: resp.headers, body: resp.body }, resp.body)).catch((e) => callback(e, {}, null));
  };
  const msg = (title = "", subtitle = "", message = "", url = "") => {
    if (url) $notify(title, subtitle, message, { "open-url": url });
    else $notify(title, subtitle, message);
  };
  const isQuanX = () => true;
  const isSurge = () => false;
  const isLoon = () => false;
  const isNode = () => false;
  const toObj = (str) => JSON.parse(str);
  const toStr = (obj) => JSON.stringify(obj);
  const queryStr = (obj) => Object.keys(obj).map((key) => `${key}=${obj[key]}`).join("&");
  const log = (message) => console.log(message);
  const done = (value = {}) => $done(value);
  return { name, read, write, notify, msg, get, post, put, toObj, toStr, queryStr, log, done, isQuanX, isSurge, isLoon, isNode };
}
