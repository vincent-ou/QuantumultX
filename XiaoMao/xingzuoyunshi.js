/* 星座运势 — 星座运势推送
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = （无 MITM，定时任务脚本）
 */
var $XiaoMaoInfo = new Env("Horoscope");
var appName = `🌌XiaoMao_星座运势`;
var XiaoMaoHoroscopeList = [];
var XiaoMaoHoroscopeTimeList = [];
var typeList = [
  {
    name: "\u2648\ufe0f\u767d\u7f8a\u5ea7",
    type: "baiyang",
    params: "aries",
  },
  {
    name: "\u2649\ufe0f\u91d1\u725b\u5ea7",
    type: "jinniu",
    params: "taurus",
  },
  {
    name: "\u264a\ufe0f\u53cc\u5b50\u5ea7",
    type: "shuangzi",
    params: "gemini",
  },
  {
    name: "\u264b\ufe0f\u5de8\u87f9\u5ea7",
    type: "juxie",
    params: "cancer",
  },
  {
    name: "\u264c\ufe0f\u72ee\u5b50\u5ea7",
    type: "shizi",
    params: "leo",
  },
  {
    name: "\u264d\ufe0f\u5904\u5973\u5ea7",
    type: "chunv",
    params: "virgo",
  },
  {
    name: "\u264e\ufe0f\u5929\u79e4\u5ea7",
    type: "tiancheng",
    params: "libra",
  },
  {
    name: "\u264f\ufe0f\u5929\u874e\u5ea7",
    type: "tianxie",
    params: "scorpio",
  },
  {
    name: "\u2650\ufe0f\u5c04\u624b\u5ea7",
    type: "sheshou",
    params: "sagittarius",
  },
  {
    name: "\u2651\ufe0f\u6469\u7faf\u5ea7",
    type: "mojie",
    params: "capricorn",
  },
  {
    name: "\u2652\ufe0f\u6c34\u74f6\u5ea7",
    type: "shuiping",
    params: "aquarius",
  },
  {
    name: "\u2653\ufe0f\u53cc\u9c7c\u5ea7",
    type: "shuangyu",
    params: "pisces",
  },
];
var timeList = [
  {
    name: "\u4eca\u65e5\u8fd0\u52bf",
    type: "D",
    params: "today",
  },
  {
    name: "\u660e\u65e5\u8fd0\u52bf",
    type: "T",
    params: "nextday",
  },
  {
    name: "\u672c\u5468\u8fd0\u52bf",
    type: "W",
    params: "week",
  },
  {
    name: "\u672c\u6708\u8fd0\u52bf",
    type: "M",
    params: "month",
  },
  {
    name: "\u672c\u5e74\u8fd0\u52bf",
    type: "Y",
    params: "year",
  },
];
!(async () => {
  await XiaoMaoFunction();
})()
  .catch((err) => {
    $XiaoMaoInfo.log(err);
    setTimeout(() => {
      $XiaoMaoInfo.done();
    }, 3000);
  })
  .finally(() => {
    console.log(appName + "星座运势数据获取成功");
    setTimeout(() => {
      $XiaoMaoInfo.done();
    }, 5000);
  });

function XiaoMaoFunction() {
  if (
    $XiaoMaoInfo.read("HoroscopeList") &&
    $XiaoMaoInfo.read("HoroscopeTime")
  ) {
    XiaoMaoHoroscopeList = $XiaoMaoInfo.read("HoroscopeList").split("+");
    XiaoMaoHoroscopeTimeList = $XiaoMaoInfo.read("HoroscopeTime").split("+");
    if (XiaoMaoHoroscopeList.length && XiaoMaoHoroscopeTimeList.length) {
      XiaoMaoHoroscopeList.forEach((type) => {
        XiaoMaoHoroscopeTimeList.forEach((time) => {
          let typeObj = typeList.find((e) => e.type == type);
          let timeObj = timeList.find((e) => e.type == time);
          let timeObjName = timeObj.name.slice(0, 2);
          if (typeObj && timeObj) {
            let option = {
              url: encodeURI(
                "https://api.vvhan.com/api/horoscope?type=" +
                  typeObj.params +
                  "&time=" +
                  timeObj.params
              ),
              method: "GET",
              headers: {
                "User-Agent":
                  "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36",
              },
            };
            $task
              .fetch(option)
              .then((response) => {
                let obj = JSON.parse(response.body);
                if (obj.success) {
                  let resultText =
                    typeObj.name +
                    "- " +
                    obj.data.type +
                    "（" +
                    obj.data.time +
                    "）" +
                    "\n\n";
                  if (obj.data.hasOwnProperty("todo")) {
                    resultText =
                      resultText +
                      timeObjName +
                      "吉凶宜忌：" +
                      "\n" +
                      "✅适宜动作：" +
                      (obj.data.todo.yi || "- ") +
                      "\n" +
                      "❎忌讳动作：" +
                      (obj.data.todo.ji || "- ") +
                      "\n" +
                      "🔢幸运数字：" +
                      (obj.data.luckynumber || "- ") +
                      "\n" +
                      "🎨幸运颜色：" +
                      (obj.data.luckycolor || "- ") +
                      "\n" +
                      "❤️速配星座：" +
                      (obj.data.luckyconstellation || "- ") +
                      "\n" +
                      "💔提防星座：" +
                      (obj.data.badconstellation || "- ") +
                      "\n" +
                      "💮运势短评：" +
                      (obj.data.shortcomment || "- ") +
                      "\n\n";
                  }
                  if (obj.data.hasOwnProperty("fortune")) {
                    let starIndex = "🌟🌟🌟🌟🌟";
                    resultText =
                      resultText +
                      timeObjName +
                      "运势：" +
                      "\n" +
                      "🈴综合运势：" +
                      starIndex.slice(0, 2 * parseInt(obj.data.fortune.all)) +
                      "\n" +
                      "💞爱情运势：" +
                      starIndex.slice(0, 2 * parseInt(obj.data.fortune.love)) +
                      "\n" +
                      "📖事业运势：" +
                      starIndex.slice(0, 2 * parseInt(obj.data.fortune.work)) +
                      "\n" +
                      "💰财富运势：" +
                      starIndex.slice(0, 2 * parseInt(obj.data.fortune.money)) +
                      "\n" +
                      "💪健康运势：" +
                      starIndex.slice(
                        0,
                        2 * parseInt(obj.data.fortune.health)
                      ) +
                      "\n\n";
                  }
                  if (obj.data.hasOwnProperty("index")) {
                    resultText =
                      resultText +
                      timeObjName +
                      "指数：" +
                      "\n" +
                      "🈴综合运势：" +
                      obj.data.index.all +
                      "\n" +
                      "💞爱情运势：" +
                      obj.data.index.love +
                      "\n" +
                      "📖事业运势：" +
                      obj.data.index.work +
                      "\n" +
                      "💰财富运势：" +
                      obj.data.index.money +
                      "\n" +
                      "💪健康运势：" +
                      obj.data.index.health +
                      "\n\n";
                  }
                  if (obj.data.hasOwnProperty("fortunetext")) {
                    resultText =
                      resultText +
                      timeObjName +
                      "运势解析：" +
                      "\n" +
                      "🈴综合运势：" +
                      obj.data.fortunetext.all +
                      "\n" +
                      "💞爱情运势：" +
                      obj.data.fortunetext.love +
                      "\n" +
                      "📖事业运势：" +
                      obj.data.fortunetext.work +
                      "\n" +
                      "💰财富运势：" +
                      obj.data.fortunetext.money +
                      "\n" +
                      "💪健康运势：" +
                      obj.data.fortunetext.health +
                      "\n" +
                      "😮‍💨解压秘诀：" +
                      (obj.data.fortunetext.decompression || "- ") +
                      "\n" +
                      "😄开运秘诀：" +
                      (obj.data.fortunetext.openluck || "- ") +
                      "\n\n";
                  }
                  $XiaoMaoInfo.notify("🌌XiaoMao_星座运势", "", resultText);
                }
              })
              .catch((err) => {
                getError(typeObj.name + "_error_1");
              });
          }
        });
      });
    }
  } else {
    $XiaoMaoInfo.notify(
      appName,
      "🚦数据获取失败❗️",
      "🚧星座默认参数未正确填写或获取失败，请前往XiaoMaoBoxJS填写！"
    );
  }
}
function getError(params) {
  $XiaoMaoInfo.notify(
    "🌌XiaoMao_星座运势",
    "",
    "🚧" + params + "获取失败，请稍后再试❗️",
    ""
  );
}
setTimeout(() => {
  $done({});
}, 2000);

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
