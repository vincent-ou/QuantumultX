/* Apple Developer — Apple Beta 更新信息推送（Cookie 捕获+定时查询）
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = developer.apple.com
 */
const $ = new Env("XiaoMaoAppleBeta");
try {
  let cookie = $request.headers.Cookie;
  $.write(cookie, "betaCookie");
  $.notify(
    "XiaoMao_Beta更新",
    "Cookie获取成功，可关闭Cookie捕获脚本！",
    `Cookie:` + $.read("betaCookie"),
    ""
  );
  $done({});
} catch (e) {}

// 获取内容
function getBetaInfo(params) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(params, "text/html");
  const sectionDownloads = doc.querySelector(".section.section-downloads");
  const results = [];
  if (sectionDownloads) {
    const columnDivs = sectionDownloads.querySelectorAll(
      ".column.large-9.medium-8.small-12"
    );
    columnDivs.forEach((div) => {
      const h3 = div.querySelector("h3");
      const p = div.querySelector("p");
      const ul = div.querySelector("ul");
      // 创建一个对象来存储该div的内容
      const content = {
        h3: h3 ? h3.textContent.trim() : "",
        p: p ? p.textContent.trim() : "",
        ul: ul
          ? Array.from(ul.querySelectorAll("li")).map((li) =>
              li.textContent.trim()
            )
          : [],
      };
      results.push(content);
    });
  }
  return results;
}

let url = "https://developer.apple.com/download";
// 核心函数
let option = {
  url: encodeURI(url),
  method: "GET",
  headers: {
    Cookie: $.read("betaCookie") ?? "",
  },
};
$.get(option, (error1, resp1, response) => {
  if (response) {
    let list = getBetaInfo(response);
    if (list.length) {
      let betaText = "";
      list.map((item, index) => {
        betaText =
          betaText +
          `⚙️版本类型：${item.h3 ?? ""}` +
          "\n" +
          `🎟版本编号：${item.ul[1] ?? ""}` +
          "\n" +
          `⏰发布时间：${item.ul[0].replace("Released", "") ?? ""}` +
          "\n" +
          `🎞️版本描述：${item.p ?? ""}` +
          "\n\n";
      });
      $.notify(
        "Beta更新",
        `数据获取成功，共${list.length}项更新，点击查看详情`,
        betaText
      );
      $.notify(
        "Beta更新",
        `共${list.length}项更新信息，点击跳转Apple Developer`,
        "",
        "https://developer.apple.com/download"
      );
      $done({});
    } else {
      $.notify(
        "Beta更新",
        "数据获取失败❗️Cookie失效❗️请重新获取❗️",
        "登陆失效，请点击通知跳转浏览器重新登录，并获取Cookie！",
        "https://developer.apple.com/download"
      );
      $done({});
    }
  } else {
    getError("5001");
  }
});

function getError(err) {
  $.notify(
    "XiaoMao_Beta更新❗️",
    "",
    "🚧系统错误，请稍后再试❗️" + err,
    ""
  );
  $done({});
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
