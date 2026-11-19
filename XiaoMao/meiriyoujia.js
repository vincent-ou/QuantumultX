/* 每日油价 — 每日油价推送（默认广东）
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = （无 MITM，定时任务脚本）
 */
var $XiaoMaoInfo = new Env("YouJia");
var appName = `⛽️XiaoMao_每日油价`;
var XiaoMaoProvince = "";
var XiaoMaoCity = "";
var XiaoMaoArea = "";
var XiaoMaoAreaInfo = "";

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
    console.log(appName + "油价地区数据获取成功");
    setTimeout(() => {
      $XiaoMaoInfo.done();
    }, 5000);
  });
function XiaoMaoFunction() {
  if ($XiaoMaoInfo.read("YouJiaProvince")) {
    if (!$XiaoMaoInfo.read("YouJiaCity") && $XiaoMaoInfo.read("YouJiaArea")) {
      XiaoMaoProvince = $XiaoMaoInfo.read("YouJiaProvince")
        ? "/" + $XiaoMaoInfo.read("YouJiaProvince")
        : "/guangdong";
      $XiaoMaoInfo.notify(
        appName + "地区数据获取失败❗️",
        "🚦当前默认获取省级行政区数据",
        "🚧油价地区信息不可跨行政区填写，请前往XiaoMaoBoxJS修正！"
      );
      return;
    } else {
      XiaoMaoProvince = $XiaoMaoInfo.read("YouJiaProvince")
        ? "/" + $XiaoMaoInfo.read("YouJiaProvince")
        : "/guangdong";
      XiaoMaoCity = $XiaoMaoInfo.read("YouJiaCity")
        ? "/" + $XiaoMaoInfo.read("YouJiaCity")
        : "";
      XiaoMaoArea = $XiaoMaoInfo.read("YouJiaArea")
        ? "/" + $XiaoMaoInfo.read("YouJiaArea")
        : "";
    }
  } else {
    XiaoMaoProvince = "/guangdong";
    $XiaoMaoInfo.notify(
      appName + "地区数据获取失败❗️",
      "🚦当前默认获取广东油价信息",
      "🚧油价地区信息未填写或获取失败，请前往XiaoMaoBoxJS填写！"
    );
  }
  XiaoMaoAreaInfo = XiaoMaoProvince + XiaoMaoCity + XiaoMaoArea;
  let url = "http://www.qiyoujiage.com" + XiaoMaoAreaInfo + ".shtml";
  let option = {
    url: encodeURI(url),
    method: "GET",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36",
    },
  };
  $XiaoMaoInfo.get(option, (err, resp, response) => {
    if (response) {
      let obj = response.replace(/\s*/g, "").toString();
      let startIndex = obj.indexOf('<divclass="info">');
      let endIndex = obj.indexOf('<divid="contAd"');
      let subContent = obj.substring(startIndex, endIndex);
      let areaIndex = subContent.indexOf("</div>");
      let areaTitle =
        subContent
          .substring(17, areaIndex)
          .replace("每日即时更新单位:元/升", "")
          .replace("(汽油跟柴油价格)", "")
          .replace("）", "）") || "每日油价";
      let areaList = subContent.split("<dl>");
      let areaContentList = [];
      if (areaList.length) {
        areaList.forEach((el, index) => {
          if (index != 0) {
            let end1 = el.indexOf("</dt>");
            let type = el.substring(4, end1);
            let end2 = el.indexOf("</dd>");
            let price = el.substring(end1 + 9, end2);
            areaContentList.push({ type: type, price: price + "(元/升)" });
          }
        });
      }
      let subContent2 = subContent.substring(
        subContent.lastIndexOf("</dl>") + 20,
        subContent.length
      );
      let changeStart = subContent2.indexOf(">");
      let changeEnd = subContent2.indexOf("<br/>");
      let changeText = subContent2.substring(changeStart + 1, changeEnd) || "";
      let subContent3 = subContent2.substring(
        changeEnd + 5,
        subContent2.length
      );
      let changeInfoStart = subContent3.indexOf(">");
      let changeInfoEnd = subContent3.indexOf("</span>");
      let changeInfoTem = subContent3.substring(
        changeInfoStart + 1,
        changeInfoEnd
      );
      let changeInfo =
        changeInfoTem.substring(0, changeInfoTem.lastIndexOf("，")) || "";
      let resultText = "🛟 " + areaTitle + "\n\n";
      if (areaContentList.length) {
        areaContentList.forEach((el, index) => {
          resultText =
            resultText +
            (index != 3
              ? "⛽️ " + el.type + "：" + el.price
              : "🛢 " + el.type + "  ：" + el.price) +
            "\n";
        });
        resultText =
          resultText +
          "\n\n" +
          (changeText ? "📈 本轮油价调整时间：" + changeText : "") +
          "\n\n" +
          (changeInfo ? "📣 本轮油价调整幅度：" + changeInfo : "");
        $XiaoMaoInfo.notify("⛽️XiaoMao_每日油价❗️", "", resultText);
      } else {
        $XiaoMaoInfo.notify(
          "🚨XiaoMao_每日油价❗️",
          "",
          "🚧获取失败，请检查XiaoMaoBoxJS地区设置❗️",
          ""
        );
      }
    } else {
      $XiaoMaoInfo.notify(
        "🚨XiaoMao_每日油价❗️",
        "",
        "🚧获取失败，请稍后再试❗️",
        ""
      );
    }
  });
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
