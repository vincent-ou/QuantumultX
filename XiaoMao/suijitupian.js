/* 随机图片 — 每日随机图片推送（风景/二次元/福利姬）
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = （无 MITM，定时任务脚本）
 */
const $ = new Env("XiaoMaoPicView");
let picTypeList = {
  1: { label: "风景", value: "views" },
  2: { label: "二次元", value: "acg" },
  3: { label: "福利姬(电脑)", value: "pcGirl" },
  4: { label: "福利姬(手机)", value: "mobileGirl" },
};
let picType = Math.floor(Math.random() * 4) + 1;
$.read("picType") ? (picType = $.read("picType")) : "";
let option = {
  url: encodeURI(
    `https://api.vvhan.com/api/wallpaper/${picTypeList[picType].value}?type=json`
  ),
};
const getImgUrl = () => {
  $.get(option, (err, resp, response) => {
    if (response) {
      let obj = JSON.parse(response);
      if (obj.url) {
        let picture = obj.url.replace(".webp", ".png").replace(".jpg", ".png");
        checkImgExists(picture)
          .then(() => {
            $.notify(
              "🖼️多元图片推送",
              "",
              "图片类型:" + picTypeList[picType].label,
              picture
            );
            $.log("图片地址:" + picture);
            $done({});
          })
          .catch(() => {
            getImgUrl();
          });
      }
    } else {
      getError();
    }
  });
};
const checkImgExists = (imgUrl) => {
  return new Promise(function (resolve, reject) {
    var ImgObj = new Image();
    ImgObj.src = imgUrl;
    ImgObj.onload = function (res) {
      resolve(res);
    };
    ImgObj.onerror = function (err) {
      reject(err);
    };
  });
};
const getError = () => {
  $.notify(
    "XiaoMao提示",
    "",
    "本次图片获取失败!",
    ""
  );
  $done({});
};
getImgUrl();
setTimeout(() => {
  getError();
}, 10000);

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
