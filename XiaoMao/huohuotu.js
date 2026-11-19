/* 火火兔 — 火火兔刷激励广告解锁（Token 捕获+定时刷）
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.cloud.alilo.com.cn
 */
let $ = new Env("HuoHuoTu");
if ($request) {
  let requestUrl = $request;
  let hht_token = requestUrl.headers.token;
  let hht_id = JSON.parse(requestUrl.body).userId.toString();
  let hht_album_id = JSON.parse(requestUrl.body).albumId;
  $.write(hht_token, "hht_token");
  $.write(hht_id, "hht_id");
  $.write(hht_album_id, "hht_album_id");
  $.notify(
    "XiaoMao_火火兔 执行成功！",
    "",
    "用户授权获取成功！" +
      "\n" +
      "Token：" +
      hht_token +
      "\n" +
      "UserId：" +
      hht_id +
      "\n" +
      "AlbumId：" +
      hht_album_id,
    ""
  );
  $done({});
} else {
  // 文章id albumid
  const myAlbumId = $.read("hht_album_id");
  // 用户id userId
  const myUserId = $.read("hht_id");

  // 这个一般不会变
  const myToken = $.read("hht_token");
  // 一般只需要填写一次
  const myCookie = "UM_dist792";

  // 准备请求的数据
  const url = `https://api.cloud.alilo.com.cn/api/v4/user-activation/trigger-excitation`;
  const method = `POST`;
  const headers = {
    "Accept-Encoding": `gzip, deflate, br`,
    Cookie: myCookie,
    Connection: `keep-alive`,
    "Content-Type": `application/json`,
    Accept: `*/*`,
    Host: `api.cloud.alilo.com.cn`,
    "User-Agent": `Mozilla/5.0 (iPhone; CPU iPhone OS 15_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Html5Plus/1.0 (Immersed/20) uni-app`,
    version: `5.2.006`,
    token: myToken,
    "Accept-Language": `zh-CN,zh-Hans;q=0.9`,
  };
  function prepareBody(userId, albumId) {
    return `{"policyId":20,"userId":${userId},"albumId":"${albumId}","pricingId":2,"resType":40,"platform":20,"openId":"","channelId":102}`;
  }
  // 发送请求的函数
  function sendRequest(attempt) {
    // console.log(`发起第${attempt}次请求...`);
    const myRequest = {
      url: url,
      method: method,
      headers: headers,
      body: prepareBody(myUserId, myAlbumId),
    };
    $task.fetch(myRequest).then(
      (response) => {
        let obj = JSON.parse(response.body);
        if(obj.info == '可解锁'){
          console.log(
            `请求 ${attempt}: ${obj.info} \n`
          );
        }else{
          console.log(
            `请求 ${attempt}: ${obj.info} \n 解锁所需分数：${obj.data.albumUnlockedPrice} \n 当前拥有分数：${obj.data.userUnlockedPrice}`
          );
        }
        
        if (obj.data.userUnlockedPrice < obj.data.albumUnlockedPrice) {
          // 继续发送下一次请求
          sendRequest(attempt + 1);
        } else {
          console.log(`共发起 ${attempt} 次请求，已刷满！`);
          $done();
        }
      },
      (reason) => {
        console.log(`第 ${attempt} 请求错误: ${reason.error}`);
        $done();
      }
    );
  }
  // 开始发送第一次请求
  sendRequest(1);
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
