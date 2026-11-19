/* 音乐搜索 — 音乐搜索（百度/Google 跳转）
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = m.baidu.com,www.baidu.com,www.google.*
 */
const $ = new Env("XiaoMaoMusicCode");
let requestUrl = $request.url;
let matcheUrl = null;
if (requestUrl.includes("baidu")) {
  const uuidRegex =
    /^https:\/\/(?:m|www)\.baidu\.com\/s\?.*?[?&](?:word|wd)=(?:md|ml)%23[^&]+/gi;
  matcheUrl = requestUrl.match(uuidRegex);
} else {
  const uuidRegex =
    /^https?:\/\/(?:[a-zA-Z0-9-]+\.)?google\.[a-zA-Z.]+\/search\?[^&]*q=(md|ml)%23([^&]+)/gi;
  matcheUrl = requestUrl.match(uuidRegex);
}
if (!matcheUrl || !matcheUrl.length) {
  getError("匹配出错了～");
  return;
}
let musicCode = matcheUrl[0].split("%23")[1];
let musicType = matcheUrl[0].indexOf("=md%23") == -1 ? true : false;
if (musicCode) {
  $.get(
    {
      url: `https://www.qqmp3.vip/api/songs.php?type=search&keyword=${musicCode}`,
    },
    (err, resp, response) => {
      if (response) {
        let obj = JSON.parse(response);
        if (obj?.data && obj.data.length) {
          let musicDownloadTips = "";
          let musicPlayId = "";
          obj.data.map((el, i) => {
            if (i == 0) {
              musicPlayId = el.rid;
            }
            musicDownloadTips =
              musicDownloadTips + `【${el.artist}】${el.name}\n`;
            el.downurl.map((dl, index) => {
              let downUrl = dl.split("$$");
              musicDownloadTips =
                musicDownloadTips + `🔗${downUrl[0]}：${downUrl[1]}\n`;
            });
            musicDownloadTips = musicDownloadTips + "\n";
          });
          if(!musicType){
            $.notify(
              `查询到 ${obj.data.length}首 歌曲`,
              "点击查看下载地址",
              `${musicDownloadTips}`
            );
          }
          
          // 在线播放
          if (musicType) {
            $.get(
              {
                url: `https://www.qqmp3.vip/api/kw.php?rid=${musicPlayId}&type=json&level=exhigh&lrc=false`,
              },
              (err2, resp2, response2) => {
                let obj2 = JSON.parse(response2);
                if (obj2?.data && obj2.data.url) {
                  let musicListenTips = `当前歌曲：${obj2.data.name} - ${obj2.data.artist}\n`;
                  musicListenTips =
                    musicListenTips +
                    `🎵歌名：${obj2.data.name}\n🎭演唱：${obj2.data.artist}\n🪘音质：${obj2.data.quality}\n🕒时长：${obj2.data.duration}\n💽大小：${obj2.data.size}\n🔗下载：${obj2.data.url}`;
                  $.notify(
                    `获取到歌曲 ${obj2.data.name} - ${obj2.data.artist}`,
                    "点击在线播放",
                    `${musicListenTips}`,
                    `${obj2.data.url}`
                  );
                } else {
                  getError("在线播放地址获取失败！");
                }
              }
            );
          }
        } else {
          getError("搜索结果为空");
        }
      } else {
        getError("请求失败，请稍后重试");
      }
    }
  );
} else {
  $done();
}

function getError(params = "") {
  $.notify(
    "🎼XiaoMao_音乐搜索",
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
