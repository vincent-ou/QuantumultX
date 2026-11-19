/* B612咔叽 — B612咔叽相机 VIP 解锁
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = user-kaji-api.b612kaji.com
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
let obj = JSON.parse($response.body);
let $XiaoMaoSvip = new Env("KaJi");
let appName = `XiaoMao-KaJiVip`;
let XiaoMaoSvip = "";
let XiaoMaoEndTime = null;
let XiaoMaoStartTime = null;
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
    $XiaoMaoSvip.read("KaJiVipYear") &&
    $XiaoMaoSvip.read("KaJiVipMonth") &&
    $XiaoMaoSvip.read("KaJiVipDay")
  ) {
    SvipDate = new Date(
      $XiaoMaoSvip.read("KaJiVipYear") +
        "/" +
        $XiaoMaoSvip.read("KaJiVipMonth") +
        "/" +
        $XiaoMaoSvip.read("KaJiVipDay")
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
        $XiaoMaoSvip.read("KaJiVipYear") +
        "/" +
        $XiaoMaoSvip.read("KaJiVipMonth") +
        "/" +
        $XiaoMaoSvip.read("KaJiVipDay");
    }
  } else {
    XiaoMaoSvip = getGoneDay(-1);
  }
  XiaoMaoStartTime = new Date(getGoneDay(-30)).getTime();
  XiaoMaoEndTime = new Date(XiaoMaoSvip).getTime();
}
if ($response.body) {
  let requestUrl = $request.url;
  if (
    /^https:\/\/user-kaji-api\.b612kaji\.com\/v1\/purchase\/subscription\/subscriber\/status?/.test(
      requestUrl
    )
  ) {
    let returnPro = {
      activated: true,
      products: [
        {
          productId: "com.campmobile.snowcamera.vip.oneyear",
          startDate: XiaoMaoStartTime,
          expireDate: XiaoMaoEndTime,
          managed: true,
          status: "ACTIVE",
        },
      ],
    };
    obj.hasOwnProperty("result") ? (obj.result = returnPro) : "";
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
