/* 小白学习打印 — 小白学习打印 SVIP 解锁
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.xbxxhz.com,cdn-h.gongfudou.com
 */
let status = isJSON($response.body);
let requestUrl = $request.url;
let $ = new Env("XiaoMaoXiaoBaiDaYin");
var obj = status
  ? JSON.parse(
      removeExtraSpaces($response.body)
        .replace(/\"isLifetimeVipMember\":\w+/g, '"isLifetimeVipMember":true')
        .replace(/\"isLifetimeSvipMember\":\w+/g, '"isLifetimeSvipMember":true')
        .replace(/\"isZulinVipMember\":\w+/g, '"isZulinVipMember":true')
        .replace(/\"isShareGiveMember\":\w+/g, '"isShareGiveMember":true')
        .replace(/\"isSchoolAgeMember\":\w+/g, '"isSchoolAgeMember":true')
        .replace(/\"isPreschoolMember\":\w+/g, '"isPreschoolMember":true')
        .replace(/\"isLifetimeMember\":\w+/g, '"isLifetimeMember":true')
        .replace(
          /\"isLifetimeVipProMember\":\w+/g,
          '"isLifetimeVipProMember":true'
        )
        .replace(/\"isNormalMember\":\w+/g, '"isNormalMember":true')
    )
  : $response.body;
if (/^https:\/\/cdn-h\.gongfudou\.com\/.+\.(jpg|png)?/.test(requestUrl)) {
  if (
    $request.headers["User-Agent"].includes(
      "%E5%B0%8F%E7%99%BD%E5%AD%A6%E4%B9%A0%E7%9B%92%E5%AD%90"
    ) &&
    !requestUrl.includes("x-image-process")
  ) {
    $.notify(
      "XiaoMao_小白学习打印！",
      "点击跳转",
      "成功捕获到图片资源！" + "\n" + requestUrl,
      requestUrl
    );
  }
  $done();
}
$done({ body: status ? JSON.stringify(obj) : obj });

function isJSON(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}



function removeExtraSpaces(jsonString) {
  var jsonObj = JSON.parse(jsonString);
  return JSON.stringify(jsonObj, function (key, value) {
    if (typeof value === "string") {
      return value.trim();
    }
    return value;
  });
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
