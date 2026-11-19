/* 实时热榜 — 实时热榜推送
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = （无 MITM，定时任务脚本）
 */
var $XiaoMaoInfo = new Env("HotList");
var appName = `🔥XiaoMao_实时热榜`;
var XiaoMaoHotList = [];
var typeList = [
  { name: "\u864e\u6251\u70ed\u699c", type: "hp", params: "huPu" },
  { name: "\u77e5\u4e4e\u70ed\u699c", type: "zh", params: "zhihuHot" },
  { name: "36\u6c2a\u70ed\u699c", type: "36", params: "36Ke" },
  { name: "\u767e\u5ea6\u70ed\u699c", type: "bd", params: "baiduRD" },
  { name: "B\u7ad9\u70ed\u699c", type: "bz", params: "bili" },
  { name: "\u8d34\u5427\u70ed\u699c", type: "tb", params: "baiduRY" },
  { name: "\u5fae\u535a\u70ed\u699c", type: "wb", params: "wbHot" },
  { name: "\u6296\u97f3\u70ed\u699c", type: "dy", params: "douyinHot" },
  { name: "\u8c46\u74e3\u70ed\u699c", type: "db", params: "douban" },
  { name: "\u5fae\u4fe1\u70ed\u699c", type: "wx", params: "wxHot" },
  { name: "\u5c11\u6570\u6d3e\u70ed\u699c", type: "ss", params: "ssPai" },
  { name: "IT\u8d44\u8baf\u70ed\u699c", type: "it", params: "itInfo" },
  { name: "IT\u8d44\u8baf\u65b0\u699c", type: "itn", params: "itNews" },
  {
    name: "\u5386\u53f2\u4e0a\u7684\u4eca\u5929",
    type: "ls",
    params: "history",
  },
  { name: "\u5fae\u4fe1\u7f8e\u98df\u699c", type: "ms", params: "wxFood" },
  { name: "\u5fae\u4fe1\u641e\u7b11\u699c", type: "gx", params: "wxJoke" },
  { name: "\u5fae\u4fe1\u8d22\u7ecf\u699c", type: "cj", params: "wxMoney" },
  { name: "\u5fae\u4fe1\u79d1\u6280\u699c", type: "kj", params: "wxKeJi" },
  { name: "\u5fae\u4fe1\u516b\u5366\u699c", type: "bg", params: "wxBaGua" },
  { name: "\u5fae\u4fe1\u661f\u5ea7\u699c", type: "xz", params: "wxXingZuo" },
  { name: "\u5fae\u4fe1\u65c5\u6e38\u699c", type: "ly", params: "wxLvYou" },
];
var showUrl = true;
var showLength = 100;

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
    console.log(appName + "实时热榜数据获取成功");
    setTimeout(() => {
      $XiaoMaoInfo.done();
    }, 5000);
  });

function XiaoMaoFunction() {
  if ($XiaoMaoInfo.read("HotUrl")) {
    showUrl = $XiaoMaoInfo.read("HotUrl") == "0" ? false : true;
  }
  if ($XiaoMaoInfo.read("HotLength")) {
    showLength = parseInt($XiaoMaoInfo.read("HotLength"));
  }
  if ($XiaoMaoInfo.read("HotList")) {
    XiaoMaoHotList = $XiaoMaoInfo.read("HotList").split("+");
    if (XiaoMaoHotList.length) {
      XiaoMaoHotList.forEach((el) => {
        let typeObj = typeList.find((e) => e.type == el);
        if (typeObj) {
          let option = {
            url: encodeURI(
              "https://api.vvhan.com/api/hotlist/" + typeObj.params
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
              if (obj.success && obj.data.length) {
                let resultText =
                  "♨️ " +
                  typeObj.name +
                  "\n" +
                  "⏰ 更新时间：" +
                  obj.update_time +
                  "\n\n";
                let list = obj.data.slice(0, showLength);
                list.forEach((item, i) => {
                  resultText =
                    resultText +
                    "[" +
                    item.index +
                    "] " +
                    (item.hasOwnProperty("hot")
                      ? (i < 5 ? "[🔥" : "[") +
                        "热度：" +
                        item.hot
                          .toString()
                          .replace("热度", "")
                          .replace("万", "w")
                          .replace("千", "k") +
                        "] "
                      : "") +
                    item.title +
                    (showUrl ? "\n" + "原文地址：" + item.mobilUrl : "") +
                    "\n\n";
                });
                $XiaoMaoInfo.notify("🔥XiaoMao_实时热榜", "", resultText);
              } else {
                getError(typeObj.name + "_error_2");
              }
            })
            .catch((err) => {
              getError(typeObj.name + "_error_1");
            });
        }
      });
    }
  } else {
    $XiaoMaoInfo.notify(
      appName,
      "🚦数据获取失败❗️",
      "🚧热榜默认参数未填写或获取失败，请前往XiaoMaoBoxJS填写！"
    );
  }
}
function getError(params) {
  $XiaoMaoInfo.notify(
    "🔥XiaoMao_实时热榜",
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
