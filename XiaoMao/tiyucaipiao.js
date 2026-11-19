/* 中国体育彩票 — 中国体育彩票最新开奖结果推送
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = （无 MITM，定时任务脚本）
 */
const $ = new Env("XiaoMaoSportsLottery");

let sf1 = new Promise((resolve, reject) => {
  let url = encodeURI(
    "https://webapi.sporttery.cn/gateway/lottery/getHistoryPageListV1.qry?gameNo=85&provinceId=0&pageSize=1&isVerify=1&pageNo=1"
  );
  $.get({ url: url }, (err, resp, response) => {
    if (response) {
      let obj = JSON.parse(response);
      resolve(obj);
    } else {
      getError("_error_1" + "获取失败，请稍后再试❗️");
    }
  });
});
let sf2 = new Promise((resolve, reject) => {
  let url = encodeURI(
    "https://webapi.sporttery.cn/gateway/lottery/getHistoryPageListV1.qry?gameNo=35&provinceId=0&pageSize=1&isVerify=1&pageNo=1"
  );
  $.get({ url: url }, (err, resp, response) => {
    if (response) {
      let obj = JSON.parse(response);
      resolve(obj);
    } else {
      getError("_error_1" + "获取失败，请稍后再试❗️");
    }
  });
});
let sf3 = new Promise((resolve, reject) => {
  let url = encodeURI(
    "https://webapi.sporttery.cn/gateway/lottery/getHistoryPageListV1.qry?gameNo=350133&provinceId=0&pageSize=1&isVerify=1&pageNo=1"
  );
  $.get({ url: url }, (err, resp, response) => {
    if (response) {
      let obj = JSON.parse(response);
      resolve(obj);
    } else {
      getError("_error_1" + "获取失败，请稍后再试❗️");
    }
  });
});
let sf4 = new Promise((resolve, reject) => {
  let url = encodeURI(
    "https://webapi.sporttery.cn/gateway/lottery/getHistoryPageListV1.qry?gameNo=04&provinceId=0&pageSize=1&isVerify=1&pageNo=1"
  );
  $.get({ url: url }, (err, resp, response) => {
    if (response) {
      let obj = JSON.parse(response);
      resolve(obj);
    } else {
      getError("_error_1" + "获取失败，请稍后再试❗️");
    }
  });
});
Promise.all([sf1, sf2, sf3, sf4])
  .then((result) => {
    let returnText = "中国体育彩票最新开奖结果公示" + "\n\n";
    if (result.length != 4) {
      returnText = returnText + "获取数据结果出错，请稍后再试～";
    } else {
      result.forEach((el, index) => {
        switch (index) {
          case 0:
            returnText =
              returnText +
              "🏀【" +
              el.value.lastPoolDraw.lotteryGameName +
              "】" +
              "[期号：" +
              el.value.lastPoolDraw.lotteryDrawNum +
              "_" +
              el.value.lastPoolDraw.lotteryDrawTime +
              "] " +
              "\n" +
              "🔴 " +
              el.value.lastPoolDraw.lotteryDrawResult.substring(0, 14) +
              "  🔵 " +
              el.value.lastPoolDraw.lotteryDrawResult.substring(15) +
              "\n\n";
            break;
          case 1:
            returnText =
              returnText +
              "🥎【" +
              el.value.lastPoolDraw.lotteryGameName +
              "】" +
              "[期号：" +
              el.value.lastPoolDraw.lotteryDrawNum +
              "_" +
              el.value.lastPoolDraw.lotteryDrawTime +
              "] " +
              "\n" +
              "🔴 " +
              el.value.lastPoolDraw.lotteryDrawResult +
              "\n\n";
            break;
          case 2:
            returnText =
              returnText +
              "⚾️【" +
              el.value.lastPoolDraw.lotteryGameName +
              "】" +
              "[期号：" +
              el.value.lastPoolDraw.lotteryDrawNum +
              "_" +
              el.value.lastPoolDraw.lotteryDrawTime +
              "] " +
              "\n" +
              "🔴 " +
              el.value.lastPoolDraw.lotteryDrawResult +
              "\n\n";
            break;
          case 3:
            returnText =
              returnText +
              "🏐【" +
              el.value.lastPoolDraw.lotteryGameName +
              "】" +
              "[期号：" +
              el.value.lastPoolDraw.lotteryDrawNum +
              "_" +
              el.value.lastPoolDraw.lotteryDrawTime +
              "] " +
              "\n" +
              "🔴 " +
              el.value.lastPoolDraw.lotteryDrawResult.substring(0, 11) +
              " 🔵 " +
              el.value.lastPoolDraw.lotteryDrawResult.substring(12) +
              "\n\n";
            break;
          default:
            break;
        }
      });
    }
    $.notify(
      "🎴XiaoMao_体彩查询",
      "体彩数据获取成功，点击查看详情～",
      returnText
    );
    $.log(returnText);
  })
  .catch((error) => {
    console.log(error);
    getError("_error_1");
  });
function getError(params = "") {
  $.notify(
    "🎴XiaoMao_体彩查询",
    "",
    "🚧" + params,
    ""
  );
}
setTimeout(() => {
  $done({});
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
