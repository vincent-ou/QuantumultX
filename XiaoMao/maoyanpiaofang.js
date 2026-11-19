/* 猫眼票房 — 猫眼票房推送
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = （无 MITM，定时任务脚本）
 */
const $ = new Env("XiaoMaoMaoYanPiaoFang");

// 核心函数
let option = {
  url: encodeURI(
    `https://piaofang.maoyan.com/dashboard-ajax/movie?orderType=0&timeStamp=${new Date().getTime()}&channelId=40009&sVersion=2&WuKongReady=h5`
  ),
  method: "GET",
};

const getRankEmoji = (index) => {
  let rankEmoji = (index + 1).toString().padStart(2, "0") + " ";
  switch (index) {
    case 0:
      rankEmoji = "🥇";
      break;
    case 1:
      rankEmoji = "🥈";
      break;
    case 2:
      rankEmoji = "🥉";
      break;
    default:
      break;
  }
  return rankEmoji;
};
const padToChars = (input, Length = 9) => {
  const targetLength = Length;
  const paddingChar = " ";
  const currentLength = input.length;
  if (currentLength < targetLength) {
    const paddingLength = targetLength - currentLength;
    const paddedString = "" + paddingChar.repeat(paddingLength) + " ";
    return input + paddedString;
  }
  return input + " ";
};

function formatTime(timestamp) {
  const date = new Date(timestamp);
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")} ${date
    .getHours()
    .toString()
    .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
}

$.get(option, (error1, resp1, response) => {
  if (response) {
    let res = JSON.parse(response)?.movieList;
    let list = res?.list;
    let returnText =
      "🍿电影票房（" +
      formatTime(res.updateInfo.updateTimestamp) +
      "）" +
      "\n" +
      `${
        "总出票：" +
        res.nationBoxInfo.viewCountDesc +
        "  " +
        "总场次：" +
        padToChars(res.nationBoxInfo.showCountDesc, 9)
      }` +
      "\n\n\n";
    if (list?.length) {
      list.map((el, index) => {
        returnText =
          returnText +
          `${getRankEmoji(index) + el.movieInfo.movieName}(${
            el.movieInfo.releaseInfo
          })\n` +
          `${
            padToChars("总票房", 7) +
            padToChars("分账票房", 7) +
            padToChars("票房占比", 5) +
            padToChars("排片占比", 5) +
            padToChars("排片场次", 5)
          }\n` +
          `${
            padToChars(el.sumBoxDesc, 8) +
            padToChars(el.sumSplitBoxDesc, 9) +
            padToChars(el.boxRate, 7) +
            padToChars(el.showCountRate, 8) +
            padToChars(el.showCount, 6)
          }\n\n`;
      });
      $.notify(
        "🍿猫眼实时电影票房",
        "票房数据获取成功，点击查看详情～",
        returnText
      );
    }
    $done({});
  } else {
    getError("请求内容失败");
  }
});

function getError(err) {
  $.notify(
    "🍿XiaoMao_猫眼票房❗️",
    err,
    "🚧信息错误，请稍后再试❗️",
    ""
  );
  $done({});
}

setTimeout(() => {
  getError("请求超时，请稍后再试～");
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
