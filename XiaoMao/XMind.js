/* XMind — XMind VIP 解锁
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = www.xmind.net,www.xmind.cn,www.xmind.app
 */
function getGoneDay(n = 0, yearFlag = true) {
  let myDate = new Date();
  myDate.setDate(myDate.getDate() - n);
  let month = myDate.getMonth() + 1;
  let day = myDate.getDate();
  let result =
    "" +
    (yearFlag ? myDate.getFullYear() : "") +
    "/" +
    (month < 10 ? "0" + month : month) +
    "/" +
    (day < 10 ? "0" + day : day);
  return result;
}
var obj = JSON.parse($response.body);
var $XiaoMaoSvip = new Env("XMind");
var appName = `XiaoMao-XMindvip`;
var XiaoMaoSvip = "";
let XiaoMaoEndTime = null;
let SvipDate = null;

!(async () => {
  await XiaoMaoFunction();
})()
  .catch((err) => {
    $XiaoMaoSvip.log(err);
    setTimeout(() => {
      $XiaoMaoSvip.done();
    }, 3000);
  })
  .finally(() => {
    console.log(appName + "设置成功");
    setTimeout(() => {
      $XiaoMaoSvip.done();
    }, 5000);
  });

function XiaoMaoFunction() {
  if (
    $XiaoMaoSvip.read("XMindVipYear") &&
    $XiaoMaoSvip.read("XMindVipMonth") &&
    $XiaoMaoSvip.read("XMindVipDay")
  ) {
    SvipDate = new Date(
      $XiaoMaoSvip.read("XMindVipYear") +
        "/" +
        $XiaoMaoSvip.read("XMindVipMonth") +
        "/" +
        $XiaoMaoSvip.read("XMindVipDay")
    ).getTime();
    if (!SvipDate) {
      $XiaoMaoSvip.notify(
        appName,
        "",
        "会员日期设置错误，请输入正确的日期范围!"
      );
      XiaoMaoSvip = getGoneDay(-1);
    } else {
      XiaoMaoSvip =
        $XiaoMaoSvip.read("XMindVipYear") +
        "/" +
        $XiaoMaoSvip.read("XMindVipMonth") +
        "/" +
        $XiaoMaoSvip.read("XMindVipDay");
    }
  } else {
    XiaoMaoSvip = getGoneDay(-365);
  }

  XiaoMaoEndTime = new Date(XiaoMaoSvip).getTime();
}

var obj = JSON.parse($response.body);
if ($response.body) {
  let requestUrl = $request.url;
  if (
    /^https:\/\/www\.xmind(\.net|\.cn|\.app)\/\_res\/devices?/.test(requestUrl)
  ) {
    obj.hasOwnProperty("license")
      ? ((obj.license.status = "sub"),
        (obj.license.expireTime = XiaoMaoEndTime))
      : "";
  } else if (
    /^https:\/\/www\.xmind(\.net|\.cn|\.app)\/\_res\/profile\/.+\/?/.test(
      requestUrl
    )
  ) {
    obj.hasOwnProperty("sub")
      ? ((obj.sub.ios.status = "sub"),
        (obj.sub.ios.expireTime = XiaoMaoEndTime))
      : "";
  }
  $done({ body: JSON.stringify(obj) });
} else {
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
