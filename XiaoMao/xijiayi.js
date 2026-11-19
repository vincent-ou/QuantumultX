/* 喜加一 — Steam/Epic 喜加一推送
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = （无 MITM，定时任务脚本）
 */
const $ = new Env("XiaoMaoXiJiaYi");

let option = { url: encodeURI("https://api.pearktrue.cn/api/steamplusone") };

$.get(option, (err, resp, response) => {
  if (response) {
    let obj = JSON.parse(response);
    if (obj.code == 200) {
      let changeNum = [
        "零",
        "一",
        "二",
        "三",
        "四",
        "五",
        "六",
        "七",
        "八",
        "九",
      ];
      let text =
        "今日喜加" +
        changeNum[obj.count] +
        "！ " +
        "[UpdateTime:" +
        obj.time +
        "]" +
        "\n\n\n";
      let listLength = obj.data.length;
      if (listLength) {
        obj.data.forEach((element, index) => {
          text =
            text +
            "🎁仓库加" +
            changeNum[index + 1] +
            "：" +
            element.name +
            "\n\n" +
            "⛓来源类型：" +
            "[" +
            element.source +
            "]" +
            element.type +
            "\n\n" +
            "⏱持续时间：" +
            element.starttime +
            " ~ " +
            element.endtime +
            "\n\n" +
            "🕹领取地址：" +
            element.url +
            "\n\n\n" +
            (listLength == 1 ? "" : "-----------------------------") +
            "\n\n\n";
        });
      }
      $.notify("🕹XiaoMao_喜加一", "🌟点击查看", text);
      $.log(text);
    } else {
      getError("_error_2");
    }
  } else {
    getError("_error_1");
  }
});

function getError(params = "") {
  $.notify(
    "🕹XiaoMao_喜加一",
    "",
    "🚧" + params + "获取失败，请稍后再试❗️",
    ""
  );
}
setTimeout(() => {
  $done({});
}, 6000);

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
