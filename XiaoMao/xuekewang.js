/* 学科网 — 学科网部分功能解锁
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = c.xkw.com,mapi.xkw.com
 */
let requestUrl = $request.url;
let status = isJSON($response.body);
if ($response.body == "false") {
  $response.body = "true";
}
var obj = status
  ? JSON.parse(
      removeExtraSpaces($response.body)
        .replace(/\"isFree\":\w+/g, '"isFree":true')
        .replace(/\"isNormal\":\w+/g, '"isNormal":true')
        .replace(/\"isVip\":\w+/g, '"isVip":true')
        .replace(/\"isLight\":\w+/g, '"isLight":true')
        .replace(/\"isMonthly\":\w+/g, '"isMonthly":true')
        .replace(/\"isWxt\":\w+/g, '"isWxt":true')
        .replace(/\"isPlus\":\w+/g, '"isPlus":true')
        .replace(/\"isPreviewed\":\w+/g, '"isPreviewed":true')
        .replace(/\"isFullPreview\":\w+/g, '"isFullPreview":true')
        .replace(/\"previewTimes\":\w+/g, '"previewTimes":10000')
        .replace(/\"hasOnlinePlay\":\w+/g, '"hasOnlinePlay":true')
        .replace(/\"hasAttention\":\w+/g, '"hasAttention":true')
        .replace(/\"resourcePackageFree\":\w+/g, '"resourcePackageFree":true')
        .replace(/\"voucherFree\":\w+/g, '"voucherFree":true')
        .replace(/\"wxtFree\":\w+/g, '"wxtFree":true')
        .replace(/\"albumFree\":\w+/g, '"albumFree":true')
        .replace(/\"documentFree\":\w+/g, '"documentFree":true')
        .replace(/\"hasConsume\":\w+/g, '"hasConsume":true')
        .replace(/\"savePrice\":\w+/g, '"savePrice":0')
        .replace(/\"inTimePrice\":\w+/g, '"inTimePrice":0')
        .replace(/\"normalInTimePrice\":\w+/g, '"normalInTimePrice":0')
        .replace(/\"normalPrice\":\w+/g, '"normalPrice":0')
    )
  : $response.body;
let $ = new Env("XKW");

if (/^https:\/\/c\.xkw\.com\/api\/v1\/student\/user\/info?/.test(requestUrl)) {
  obj.vipStatus.isVip = true;
  obj.endTime = "2222-02-02";
  obj.download = 1009;
  obj.vipExpireDays = 365;
  obj.vipStatus.download = 1009;
  obj.vipStatus.endTime = "2222-02-02";
  obj.vipStatus.vipExpireDays = 365;
} else if (
  /^https:\/\/c\.xkw\.com\/api\/v1\/student\/document\/img-preview?/.test(
    requestUrl
  )
) {
  let text =
    "抓取到试卷图片，共" +
    obj.pageCount +
    "张，已成功捕获" +
    obj.images.length +
    "张" +
    "\n\n";
  let textDetail = "";
  if (obj.images.length) {
    obj.images.forEach((el, index) => {
      textDetail = textDetail + "第" + (index + 1) + "张：" + el + "\n";
    });
    $.notify("学科网-学生端", "", text + textDetail, "");
  }
} else if (
  /^https:\/\/mapi\.xkw\.com\/api\/v3\/document\/preview?/.test(requestUrl)
) {
  let textDetail = "";
  let numTotal = 0;
  if (obj.hasOwnProperty("result") && obj.result.length) {
    obj.result.forEach((el, index) => {
      numTotal = numTotal + el.images.length;
      textDetail =
        textDetail +
        (index == 0 ? "" : "\n\n") +
        "第" +
        (index + 1) +
        "套：" +
        el.fileName +
        "，共" +
        el.pageCount +
        "张，已成功捕获" +
        el.previewCount +
        "张" +
        "\n";
      if (el.images.length) {
        el.images.forEach((e, i) => {
          textDetail = textDetail + "第" + (i + 1) + "张：" + e + "\n";
        });
      }
    });
    let text =
      "抓取到试卷图片，共" +
      obj.result.length +
      "套" +
      numTotal +
      "张" +
      "\n\n";
    $.notify("学科网-教师端", "", text + textDetail, "");
  }
} else if (
  /^https:\/\/mapi\.xkw\.com\/api\/v1\/user\/userinfo?/.test(requestUrl)
) {
  obj.status = 1;
  obj.endTime = "2222-02-02";
  obj.vipExpireDays = 365;
  obj.userAsset.userRmb = 100000;
  obj.userAsset.userAdvPoint = 11;
  obj.userAsset.userRmbIncome = 12;
  obj.userAsset.userPoint = 13;
} else if (
  /^https:\/\/mapi\.xkw\.com\/api\/v1\/user\/behavior\/statistics?/.test(
    requestUrl
  )
) {
  obj = {
    impact: 200000,
    money: 100000,
    voucher: 300000,
    download: 800000,
    favor: 400000,
    learnBean: 50000,
  };
} else if (
  /^https:\/\/mapi\.xkw\.com\/api\/v3\/user\/info-with-vip-status?/.test(
    requestUrl
  )
) {
  obj.identity = {
    isLight: true,
    isMonthly: true,
    isWxt: true,
    isPlus: true,
    balance: {
      money: {
        balance: 300000,
      },
      learnShell: {
        balance: 200000,
      },
    },
    isVip: true,
  };
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
