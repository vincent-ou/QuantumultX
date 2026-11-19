/* 采精车 — 采精车更新推送
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = （无 MITM，定时任务脚本）
 */
const $ = new Env("XiaoMaoSCV");

let url =
  "https://missav.com/random/" + (Math.random() * 100).toFixed(0).toString();
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
    let obj = response;
    const regExp = /<img[^>]+src=['"]([^'"]+)['"]+/g;
    const regExp2 = /<a[^>]+href=['"]([^'"]+)['"]+/g;
    const regExp3 = /<img[^>]+alt=['"]([^'"]+)['"]+/g;
    const result = [],
      result2 = [],
      result3 = [];
    let temp;
    while ((temp = regExp.exec(obj)) != null) {
      result.push(temp[1]);
    }
    while ((temp = regExp2.exec(obj)) != null) {
      if (!result2.includes(temp[1])) {
        result2.push(temp[1]);
      }
    }
    while ((temp = regExp3.exec(obj)) != null) {
      result3.push(temp[1]);
    }
    let list = [];
    let img = "";
    let resultText =
      "🛟 复制感兴趣的地址前往浏览器查看吧，请注意劳逸结合哟～" + "\n\n";
    if (result.length) {
      result.forEach((el, index) => {
        list.push({
          imgUrl: el,
          videoUrl: result2 && result2[index],
          title: result3 && result3[index],
        });
      });
      list.forEach((el, index) => {
        if (index == 0) {
          img = el.imgUrl;
        }
        resultText =
          resultText +
          "⛽️第" +
          (index + 1) +
          "车：" +
          el.title +
          "\n" +
          "📀视频地址：" +
          el.videoUrl +
          "\n\n\n";
      });
      $.notify(
        "🚗XiaoMao_采精车发车成功❗️",
        "🚧请注意控制车速❗️",
        resultText,
        img
      );
      $.log(resultText);
    }
  } else {
    $.notify(
      "🚨XiaoMao_采精车发车失败❗️",
      "",
      "🚧抛锚了，请尝试重新点火❗️",
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
