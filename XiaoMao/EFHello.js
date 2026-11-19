/* EF Hello — EF Hello 会员解锁
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.hello.ef.com
 */
let $XiaoMaoSvip = new Env("EFHello");
let XiaoMaoIndex = 1;
if ($XiaoMaoSvip.read("EFHelloIndex")) {
  XiaoMaoIndex = parseInt($XiaoMaoSvip.read("EFHelloIndex")) || 1;
}

// 获取相应数据
let obj = JSON.parse(
  $response.body
    .replace(/hidden/g, "enabled")
    .replace(/false/g, "true")
    .replace(/disabled/g, "enabled")
    .replace(/visible/g, "enabled")
    .replace(/NONE/g, "RESTRICTED")
    .replace(/\"isEnrolled\":\w+/g, '"isEnrolled":true')
    .replace(/\"isGifted\":\w+/g, '"isGifted":false')
);
// 获取请求地址
let requestUrl = $request.url;
if (/^https:\/\/api\.hello\.ef\.com\/graphql?/.test(requestUrl)) {
  if (
    obj.data.hasOwnProperty("viewer") &&
    obj.data.viewer.hasOwnProperty("me")
  ) {
    let premium = {
      planType: "yearly",
      __typename: "Premium",
      paymentProviderName: "APPLE",
      endTime: 7956886942,
      isEnabled: true,
      isFamilyLeader: true,
    };
    obj.data.viewer.me.hasUsedRoleplay = true;
    obj.data.viewer.me.premium = premium;
  }

  if (
    obj.data.hasOwnProperty("node") &&
    obj.data.node.hasOwnProperty("sections") &&
    obj.data.node.sections.length
  ) {
    obj.data.node.sections.forEach((el, index) => {
      if (index > XiaoMaoIndex - 2) {
        el.progress.isCompleted = false;
      }
    });
    $XiaoMaoSvip.notify(
      "XiaoMao_EF Hello 执行成功！",
      "",
      "Nice!已解锁成功章节-" + XiaoMaoIndex + " ，顺序解锁请通过BoxJS依次配置。"
    );
  }
}
// 重写数据
$done({ body: JSON.stringify(obj) });

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
