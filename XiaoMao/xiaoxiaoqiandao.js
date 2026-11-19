/* 小小签到 — 微信小程序小小签到自动刷金币
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api-xcx-qunsou.weiyoubot.cn
 */
const $ = new Env("XiaoMao_小小签到");
const _key = "XX_token";
const XX_TOKEN = $.getdata(_key);

!(async () => {
  if (typeof $request != "undefined") {
    if ($request && $request.url) {
      let requestUrl = $request.url;
      if (
        /^https:\/\/api-xcx-qunsou\.weiyoubot\.cn\/xcx\/checkin\/v3\/vip?/.test(
          requestUrl
        )
      ) {
        let token = requestUrl.substring(
          requestUrl.indexOf("access_token=") + 13
        );
        $.setdata(token, _key);
        $.msg($.name, "", "获取小小签到Token成功：Token为 " + token);
      }
    }
    return;
  }
  for (var i = 0; i < 30; i++) {
    (function (t, data) {
      setTimeout(async function () {
        await getAward(t + 1);
      }, 13000 * t);
    })(i, "");
  }
})()
  .catch((e) => {
    $.msg(
      $.name,
      "遇到错误🙅",
      "执行失败！Token已失效，请重新获取！教程请见脚本注释："
    );
    $.log(
      e,
      `❌失败! 原因: ${e}!教程请见脚本注释：`,
      ""
    );
    $.done();
  })
  .finally(() => {
    setTimeout(() => {
      $.msg($.name, "", "执行完毕！每次仅可完整执行一次喔～");
      $.done();
    }, 395000);
  });

function getAward(t) {
  return new Promise((resolve) => {
    let body = {
      type: "video",
      task_id: "",
      access_token: XX_TOKEN,
    };

    let params = {
      url: "https://api-xcx-qunsou.weiyoubot.cn/xcx/checkin/v2/credit/award",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.27(0x18001b37) NetType/4G Language/zh_CN",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    $.post(params, (error, response, data) => {
      try {
        var result = JSON.parse(data);
        if (result.sta == 0 && result.data && result.data.credit) {
          $.msg(
            $.name,
            "",
            "第" +
              t +
              "次" +
              "任务成功，" +
              "剩余" +
              (30 - t) +
              "次任务" +
              "，当前金币为" +
              result.data.credit
          );
        } else if (result.sta == -500) {
          $.logErr(
            "执行失败！Token已失效，请重新获取！教程请见脚本注释：",
            ""
          );
          $.msg(
            $.name,
            "遇到错误🙅",
            "执行失败！Token已失效，请重新获取！教程请见脚本注释："
          );
          $.done();
        } else {
          $.logErr(
            "执行失败！每日仅可执行30次，且Token有效期较短，请检查先决条件！教程请见脚本注释：",
            ""
          );
          $.msg(
            $.name,
            "遇到错误🙅",
            "执行失败！Token已失效，请重新获取！教程请见脚本注释："
          );
          $.done();
        }
      } catch (e) {
        $.logErr(
          e,
          "执行失败！每日仅可执行30次，且Token有效期为较短，请检查先决条件！教程请见脚本注释："
        );
        $.msg(
          $.name,
          "遇到错误🙅",
          "执行失败！Token已失效，请重新获取！教程请见脚本注释："
        );
        $.done();
      } finally {
        resolve();
      }
    });
  });
}

function Env(name) {
  const read = (key) => $prefs.valueForKey(key);
  const write = (key, value) => $prefs.setValueForKey(key, value);
  const getdata = (key) => $prefs.valueForKey(key);
  const setdata = (value, key) => $prefs.setValueForKey(value, key);
  const notify = (title = "", subtitle = "", message = "", url = "") => {
    if (url) $notify(title, subtitle, message, { "open-url": url });
    else $notify(title, subtitle, message);
  };
  const msg = (title = "", subtitle = "", message = "", url = "") => {
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
  const isQuanX = () => true;
  const isSurge = () => false;
  const isLoon = () => false;
  const isNode = () => false;
  const toObj = (str) => JSON.parse(str);
  const toStr = (obj) => JSON.stringify(obj);
  const queryStr = (obj) => Object.keys(obj).map((key) => `${key}=${obj[key]}`).join("&");
  const log = (message) => console.log(message);
  const logErr = (message) => console.log(message);
  const done = (value = {}) => $done(value);
  return { name, read, write, getdata, setdata, notify, msg, get, post, put, toObj, toStr, queryStr, log, logErr, done, isQuanX, isSurge, isLoon, isNode };
}
