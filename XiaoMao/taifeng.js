/* 实时台风 — 实时台风信息播报推送
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = （无 MITM，定时任务脚本）
 */
const $ = new Env("XiaoMaoTyhoon");

let tfDetails,
  tfInfo = "";
let tfDetailsList = [];
let url2 = encodeURI(
  "https://typhoon.slt.zj.gov.cn/Api/TyphoonList/" + new Date().getFullYear()
);
let option3 = {
  url: url2,
};
$.get(option3, (err, resp, response) => {
  if (response) {
    let obj = JSON.parse(response);
    if (obj.length) {
      obj.forEach((el) => {
        if (el.isactive == "1") {
          getDetail(el.tfid);
        }
      });
    }
  } else {
    getError("_error_1" + "获取失败，请稍后再试❗️");
  }
});

setTimeout(() => {
  let option = {
    url: encodeURI("https://typhoon.slt.zj.gov.cn/Api/TyhoonActivity"),
  };
  $.get(option, (err, resp, response) => {
    if (response) {
      let obj = JSON.parse(response);
      if (obj.length) {
        let objLength = obj.length;
        let returnText = "";

        obj.forEach((el, index) => {
          tfInfo =
            "[" +
            el.timeformate +
            "] " +
            el.tfid.substring(0, 4) +
            "年第" +
            el.tfid.substring(4, 6) +
            "号" +
            el.strong +
            el.name +
            "(" +
            el.enname +
            ")" +
            "\n" +
            "💨 当前风速：" +
            el.speed +
            "米/秒" +
            "\n" +
            "🪁 移速移向：" +
            el.movespeed +
            "公里/小时、" +
            el.movedirection +
            "\n" +
            "🎐 中心位置：东经" +
            el.lng +
            "°、北纬" +
            el.lat +
            "°" +
            "\n" +
            "🫧 中心气压：" +
            el.pressure +
            "百帕" +
            "\n" +
            "🌊 中心风力：" +
            el.power +
            "级" +
            "\n\n" +
            tfDetailsList[index] +
            "\n\n";

          returnText =
            returnText +
            (objLength < 2 ? "" : "[第" + (index + 1) + "条]") +
            tfInfo;
        });

        $.notify(
          "🌀XiaoMao_台风监测",
          "监测到" + objLength + "条台风数据",
          returnText
        );
        $.log(returnText);
      } else {
        getError("_err_2" + "获取失败或当前无台风❗️");
      }
    } else {
      getError("_err_3" + "获取失败，请稍后再试❗️");
    }
  });
}, 5000);

function getDetail(tfid) {
  let url = `https://typhoon.slt.zj.gov.cn/Api/TyphoonInfo/` + tfid;
  let option2 = {
    url: encodeURI(url),
  };
  $.get(option2, (err, resp, response) => {
    if (response) {
    } else {
      let obj2 = JSON.parse(response);
      if (obj2.points.length) {
        let tf_D = obj2.points.at(-1);
        let radius7,
          radius10,
          radius12 = "";
        if (tf_D.radius7) {
          let a = tf_D.radius7;
          if (a != "") {
            let b = a.split("|");
            let startNum = Math.min(...b);
            let endNum = Math.max(...b);
            if (startNum == endNum) {
              radius7 = "🕖 七级半径：" + startNum + "公里" + "\n";
            } else {
              radius7 =
                "🕖 七级半径：" + startNum + "~" + endNum + "公里" + "\n";
            }
          }
        }
        if (tf_D.radius10) {
          let a = tf_D.radius10;
          if (a != "") {
            let b = a.split("|");
            let startNum = Math.min(...b);
            let endNum = Math.max(...b);
            if (startNum == endNum) {
              radius10 = "🕙 十级半径：" + startNum + "公里" + "\n";
            } else {
              radius10 =
                "🕙 十级半径：" + startNum + "~" + endNum + "公里" + "\n";
            }
          }
        }
        if (tf_D.radius12) {
          let a = tf_D.radius12;
          if (a != "") {
            let b = a.split("|");
            let startNum = Math.min(...b);
            let endNum = Math.max(...b);
            if (startNum == endNum) {
              radius12 = "🕛 十二级半径：" + startNum + "公里" + "\n";
            } else {
              radius12 =
                "🕛 十二级半径：" + startNum + "~" + endNum + "公里" + "\n";
            }
          }
        }

        tfDetails =
          (radius7 || "") +
          (radius10 || "") +
          (radius12 || "") +
          "\n" +
          (tf_D.ckposition
            ? "🗼 参考位置：" + tf_D.ckposition.replace(/\s+/g, "") + "\n"
            : "") +
          (tf_D.jl ? "🎢 未来趋势：" + tf_D.jl.replace(/\s+/g, "") + "\n" : "");

        tfDetailsList.unshift(tfDetails || "");
      }
    }
  });
}

function getError(params = "") {
  $.notify(
    "🌀XiaoMao_台风监测",
    "",
    "🚧" + params,
    ""
  );
}
setTimeout(() => {
  $done({});
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
