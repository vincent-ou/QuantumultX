/* 年度节日 — 年度节日信息推送
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = （无 MITM，定时任务脚本）
 */
const $ = new Env("XiaoMaoHoliday");
let year = new Date().getFullYear().toString();
let nowMonth = (new Date().getMonth() + 1).toString().padStart(2, 0);
let nowDay = new Date().getDate().toString().padStart(2, 0);
let time = new Date().getTime() / 1000;
let dateTime = year + nowMonth + nowDay;
let option = {
  url: encodeURI(
    "https://pan.baidu.com/api/getholiday?vip=0&version=11.34.5&queryfree=2&network_type=wwan&freeisp=0&activestatus=0&time=" +
      time +
      "&clienttype=1&status=0&date=" +
      year
  ),
};
$.get(option, (err, resp, response) => {
  if (response) {
    let obj = JSON.parse(response);
    if (obj.errno == 0 && obj.data.hasOwnProperty(dateTime)) {
      $.notify(
        "💢节日推送·" +
          obj.data[dateTime].name +
          "·" +
          obj.data[dateTime].tag || "💢节日推送",
        "",
        obj.data[dateTime].info || "",
        "https://apis.jxcxin.cn/api/Bing"
      );
      $.log(obj.data[dateTime].info);
    } else {
      $.notify(
        "早上好",
        "",
        "今天是" + year + "年" + nowMonth + "月" + nowDay + "日",
        "https://apis.jxcxin.cn/api/Bing"
      );
    }
  } else {
    $.notify(
      "XiaoMao提示",
      "",
      "节日信息获取失败!",
      ""
    );
  }
});
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
