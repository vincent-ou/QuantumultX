/* 和包 — 和包银联红包商品种类查询推送
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = （无 MITM，定时任务脚本）
 */
const $ = new Env("XiaoMaoHeBao");

const url = "https://m.jf.10086.cn/cmcc-hepay-shop/search/query";
const method = "POST";
const headers = {
  Connection: "keep-alive",
  "Accept-Encoding": "gzip, deflate, br",
  "Content-Type": "application/json",
  Origin: "https://m.jf.10086.cn",
  "User-Agent":
    "Mozilla/5.0 (iPhone; CPU iPhone OS 15_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Html5Plus/1.0 Hebao/9.15.42/com.cmpay.CMPayClient /sa-sdk-ios/sensors-verify/uba.cmpay.com?production ",
  Host: "m.jf.10086.cn",
  Referer: "https://m.jf.10086.cn/",
  "Accept-Language": "zh-CN,zh-Hans;q=0.9",
  Accept: "*/*",
};
const body =
  '{"sortColumn":"default","sortType":"desc","pageSize":20,"pageNum":1,"firstKeyword":"银联","integral":820,"userPhoneNo":"10000000000","province":"jx"}';
const myRequest = { url: url, method: method, headers: headers, body: body };

$.post(myRequest, (err, resp, response) => {
  let returnText = "";
  if (response) {
    let body = JSON.parse(response);
    let returnText = "";
    let searchLen = body.resultJson.searchList.length;
    if (searchLen) {
      returnText =
        "✅银联红包商品查询成功！" + "\n\n" + "共" + searchLen + "款商品：";

      let hotList =
        "\n\n" +
        "🔥热门商品清单：" +
        "\n\n" +
        " 5元红包：" +
        (body.resultJson.searchList.some(
          (e) => e.name.indexOf("银联红包5元") != -1
        )
          ? "✅"
          : "🈚️") +
        "\n" +
        "10元红包：" +
        (body.resultJson.searchList.some(
          (e) => e.name.indexOf("银联红包10元") != -1
        )
          ? "✅"
          : "🈚️") +
        "\n" +
        "20元红包：" +
        (body.resultJson.searchList.some(
          (e) => e.name.indexOf("银联红包20元") != -1
        )
          ? "✅"
          : "🈚️") +
        "\n" +
        "30元红包：" +
        (body.resultJson.searchList.some(
          (e) => e.name.indexOf("银联红包30元") != -1
        )
          ? "✅"
          : "🈚️") +
        "\n" +
        "50元红包：" +
        (body.resultJson.searchList.some(
          (e) => e.name.indexOf("银联红包50元") != -1
        )
          ? "✅"
          : "🈚️") +
        "\n\n" +
        "快去和包商场兑换吧～";

      returnText =
        returnText +
        body.resultJson.searchList.map((e) => e.name).toString() +
        "\n\n" +
        hotList;

      $.log(returnText);
    } else {
      returnText = "❌查询失败，请稍后再试～";
    }
    $.notify("🎁XiaoMao_和包银联红包查询", "", returnText);
  } else {
    returnText = "❌查询失败，请稍后再试～";
    $.notify("🎁XiaoMao_和包银联红包查询", "", "❌查询失败，请稍后再试～");
  }
});

setTimeout(() => {
  $done();
}, 3000);

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
