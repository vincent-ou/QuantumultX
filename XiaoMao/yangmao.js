/* 实时线报 — 实时线报羊毛活动推送
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = （无 MITM，定时任务脚本）
 */
const $ = new Env("XiaoMaoYangMao");

let url = "http://www.0818tuan.com/list-1-0.html";
let option = {
  url: encodeURI(url),
  method: "GET",
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36",
  },
};
$.get(option, (err, resp, response) => {
  if (response) {
    let obj = response.replace(/\s*/g, "").toString();
    let startIndex = obj.indexOf('<divclass="list-group"');
    let endIndex = obj
      .substring(startIndex, obj.length)
      .indexOf('<divclass="pagerlist_page">');
    let subContent = obj.substring(startIndex, startIndex + endIndex);
    let temArr = subContent.split("<a");
    let subArr = temArr.slice(4, temArr.length);
    let subObjArr = [];
    let resultText = "";
    if (subArr.length) {
      let adReg = /\d+\./;
      let shopReg = /猫超|包邮|付|拍|秒杀|斤|加购|叠|凑|券|买\d件|拍\d件/;
      subArr.forEach((el) => {
        let textUrlStart = el.indexOf('href="');
        let textUrlEnd = el.indexOf('"target');
        let textTitleStart = el.indexOf('title="');
        let textTitleEnd = el.indexOf('"class=');
        let textTimeStart = el.indexOf('successred">');
        let textTimeEnd = el.indexOf("</span>");
        let url =
          "http://www.0818tuan.com" +
          el.substring(textUrlStart + 6, textUrlEnd);
        let title = el.substring(textTitleStart + 7, textTitleEnd);
        let time = el.substring(textTimeStart + 12, textTimeEnd);
        if (!adReg.test(title) && !shopReg.test(title))
          subObjArr.push({ url: url, title: title, time: time });
      });
      resultText =
        "🛟最新线报活动获取成功，" +
        "数据最新更新时间（" +
        subObjArr[0].time +
        "）,共获取到" +
        subObjArr.length +
        "条数据。" +
        "\n\n";
      subObjArr.forEach((el, i) => {
        resultText =
          resultText +
          "🏷[" +
          (i + 1) +
          "] " +
          "[" +
          el.time +
          "] " +
          el.title +
          "\n" +
          "🔗原文链接：" +
          el.url +
          "\n\n";
      });
      $.notify("🐑XiaoMao_实时线报❗️", "", resultText);
      $.log(resultText);
    } else {
      $.notify(
        "🚨XiaoMao_实时线报❗️",
        "",
        "🚧获取失败(error_1)，请稍后再试❗️",
        ""
      );
    }
  } else {
    $.notify(
      "🚨XiaoMao_实时线报❗️",
      "",
      "🚧获取失败(error_2)，请稍后再试❗️",
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
