/* 上海地铁 — 上海地铁实时信息查询推送
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = （无 MITM，定时任务脚本）
 */
const $ = new Env("XiaoMaoMetro_SH");
let url =
  "https://service.shmetro.com/shMetro2/tos/get_tosstate_sh_metro.action";
let option = {
  url: encodeURI(url),
  method: "POST",
};

$.post(option, (err, resp, response) => {
  if (response) {
    let responseJson = JSON.parse(response);
    let returnText = "";

    if (responseJson.title != "") {
      let originalData = responseJson.title
        .replace(/<\/span>&nbsp;/g, "")
        .split("<span class='span1'>");
      let duplicateRemovalData = [...new Set(originalData)].slice(1).reverse();

      if (duplicateRemovalData.length) {
        duplicateRemovalData.forEach((el, index) => {
          returnText =
            returnText +
            el +
            (index == duplicateRemovalData.length - 1
              ? ""
              : index == duplicateRemovalData.length - 2
              ? "\n\n"
              : "\n");
        });
      }
    } else {
      returnText = "当前全线网通畅，运营服务正常！";
    }

    $.notify(
      "🚇上海地铁实时信息查询",
      "查询时间「" + timestampToTime() + "」",
      returnText,
      ""
    );
  } else {
    getError();
  }
});

function timestampToTime() {
  var date = new Date();
  var Y = date.getFullYear() + "-";
  var M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "-";
  var D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
  var h =
    (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
  var m =
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
    ":";
  var s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  return Y + M + D + h + m + s;
}

function getError() {
  $.notify(
    "🚇XiaoMao_上海地铁实时信息查询失败❗️",
    "",
    "🚧请稍后再试❗️",
    ""
  );
}
setTimeout(() => {
  $done({});
}, 2000);

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
