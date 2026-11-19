/* 车牌影片搜索 — 车牌号影片搜索（百度/Google 跳转）
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = m.baidu.com,www.baidu.com,www.google.*
 */
const $ = new Env("XiaoMaoAvCode");
let requestUrl = $request.url;
let matcheUrl = null;
if (requestUrl.includes("baidu")) {
  const uuidRegex =
    /^https:\/\/(?:m|www)\.baidu\.com\/s\?.*?[?&](?:word|wd)=(?:av)%23[^&]+/gi;
  matcheUrl = requestUrl.match(uuidRegex);
} else {
  const uuidRegex =
    /^https?:\/\/(?:[a-zA-Z0-9-]+\.)?google\.[a-zA-Z.]+\/search\?[^&]*q=(av)%23([^&]+)/gi;
  matcheUrl = requestUrl.match(uuidRegex);
}
if (!matcheUrl || !matcheUrl.length) {
  getError("匹配出错了～");
  return;
}
let avCode = matcheUrl[0].split("%23")[1];
if (avCode) {
  let mainOption = {
    url: encodeURI(
      "https://client-rapi-missav.recombee.com/missav-default/search/users/b73beab7-af71-4c67-bfb2-fd8207262db5/items/?frontend_timestamp=1741185136&frontend_sign=e7a1fa07ee822a1ed8bd57de5c80f96162b42383"
    ),
    method: "POST",
    headers: {
      "Sec-Fetch-Dest": `empty`,
      Connection: `keep-alive`,
      "Accept-Encoding": `gzip, deflate, br`,
      "Content-Type": `application/json`,
      "Sec-Fetch-Site": `cross-site`,
      Origin: `https://missav.ws`,
      "User-Agent": `Mozilla/5.0 (iPhone; CPU iPhone OS 18_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.3.1 Mobile/15E148 Safari/604.1`,
      "Sec-Fetch-Mode": `cors`,
      Host: `client-rapi-missav.recombee.com`,
      Referer: `https://missav.ws/`,
      "Accept-Language": `zh-CN,zh-Hans;q=0.9`,
      Accept: `application/json`,
    },
    body: JSON.stringify({
      searchQuery: avCode,
      count: 1,
      scenario: "search",
      returnProperties: true,
      includedProperties: [
        "title",
        "duration",
        "has_chinese_subtitle",
        "has_english_subtitle",
        "is_uncensored_leak",
        "dm",
      ],
      cascadeCreate: true,
    }),
  };

  $.post(mainOption, (err, resp, response) => {
    if (response) {
      let obj = JSON.parse(response);
      if (obj?.recomms && obj.recomms.length) {
        obj.recomms.map((el, index) => {
          $.notify(
            `车牌${avCode}读取完毕`,
            `${el.values.title}`,
            `正在加载视频地址，此操作需要代理网络！`,
            `https://fourhoi.com/${el.id}/cover-t.jpg`
          );
          $.get(
            { url: encodeURI(`https://missav.ws/cn/${el.id}`) },
            (err2, resp2, response2) => {
              let thumbnailText = response2.split("thumbnail:")[1];
              if (thumbnailText) {
                const uuidRegex =
                  /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi;
                const matches = thumbnailText.match(uuidRegex);
                if (matches && matches.length > 0) {
                  let matchUUID = Array.from(new Set(matches))[
                    new Set(matches).size - 1
                  ];
                  $.notify(
                    `片名：${el.values.title}`,
                    `是86，86上山了`,
                    `点击观影～`,
                    `https://surrit.com/${matchUUID}/720p/video.m3u8`
                  );
                } else {
                  getError("未找到视频UUID");
                }
              } else {
                getError("视频结果为空");
              }
            }
          );
        });
      } else {
        getError("搜索结果为空");
      }
    } else {
      getError("请求失败，请稍后重试");
    }
  });
} else {
  $done();
}

function getError(params = "") {
  $.notify(
    "🔞XiaoMao_车牌搜索",
    "",
    "🚧获取失败，错误：" + params + "❗️",
    ""
  );
  $done();
}
setTimeout(() => {
  $done();
}, 8000);

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
