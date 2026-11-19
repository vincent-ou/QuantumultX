/* Apple 更新验证 — Apple 固件验证状态查询推送
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = （无 MITM，定时任务脚本）
 */
const $ = new Env("XiaoMaoAppleUpdateVerification");

let DeviceInformation = "iPhone16,2";
$.read("DeviceInformation")
  ? (DeviceInformation = $.read("DeviceInformation"))
  : "";

function convertToChineseDate(dateStr) {
  // 去除序数词后缀（例如 'nd', 'rd', 'st', 'th'）
  const cleanDateStr = dateStr.replace(/(\d+)(st|nd|rd|th)/, "$1");
  // 将英文日期字符串转换为 Date 对象
  const dateObj = new Date(cleanDateStr);
  // 获取日期的年、月、日
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // 月份补零
  const day = String(dateObj.getDate()).padStart(2, "0"); // 日期补零
  // 构建中文日期字符串
  return `${year}/${month}/${day}`;
}
function getDateList(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const rows = doc?.querySelectorAll("tr.firmware");
  const device = doc
    .querySelector("title")
    ?.textContent.replace("Choose an IPSW for the ", "")
    .replace("Choose an OTA for the ", "")
    .replace(" / IPSW Downloads", "");
  let deviceName = "";
  const tdSequence = rows[0]?.querySelectorAll("td").length == 5 ? 0 : 1;
  const firmwareData = Array.from(rows).map((row) => {
    deviceName == ""
      ? (deviceName = row
          .querySelector("td:nth-child(2)")
          .childNodes[0].textContent.trim()
          .match(/^\D+/)[0]
          .trim())
      : "";
    const status = row.querySelector("td:nth-child(1)").textContent.trim();
    const version = row
      .querySelector("td:nth-child(2)")
      .childNodes[0].textContent.trim()
      .replace(/^\D+/, "")
      .replace(/\s+/g, "");
    const date = convertToChineseDate(
      row
        .querySelector("td:nth-child(" + (3 + tdSequence) + ")")
        .textContent.trim()
    );
    const size = row
      .querySelector("td:nth-child(" + (4 + tdSequence) + ")")
      .textContent.trim();
    const filename = row
      .querySelector("td:nth-child(" + (5 + tdSequence) + ")")
      .textContent.trim();
    const downloadLink = row
      .getAttribute("onclick")
      .match(/window\.location\s*=\s*'(.*)'/)[1]
      .replace("download", "install");
    return { status, version, date, size, filename, downloadLink };
  });
  return { device, deviceName, firmwareData };
}
function padToChars(input, Length = 9) {
  const targetLength = Length;
  const paddingChar = " ";
  const currentLength = input.length;
  if (currentLength < targetLength) {
    const paddingLength = targetLength - currentLength;
    const paddedString = "" + paddingChar.repeat(paddingLength) + " ";
    return input + paddedString;
  }
  return input + " ";
}

// 核心函数
let option = {
  url: encodeURI("https://ipsw.me/" + DeviceInformation),
  method: "GET",
};
$.get(option, (error1, resp1, response) => {
  if (response) {
    let versionList = getDateList(response);
    if (!versionList.device?.includes("404")) {
      if (versionList.firmwareData.length) {
        let returnText = `设备型号「${versionList.device}」\n设备系统「${
          versionList.deviceName
        }」\n有效版本「${
          versionList.firmwareData.filter((e) => e.status == "✓").length
        }」个\n\n\n🎲验证通道版本列表\n\n${
          padToChars(versionList.deviceName, 18) +
          padToChars("状态", 3) +
          padToChars("大小", 8) +
          "时间"
        }\n`;
        let statusList = ["✅", "❌"];
        let downloadLinkText = "\n\n" + "🧩可用版本下载地址" + "\n\n";
        versionList.firmwareData.map((el) => {
          let verificationStatus = el.status == "✓" ? true : false;
          returnText =
            returnText +
            `${
              padToChars(el.version, 18) +
              padToChars(
                verificationStatus ? statusList[0] : statusList[1],
                3
              ) +
              padToChars(el.size, 8) +
              el.date
            }\n`;

          if (verificationStatus) {
            downloadLinkText =
              downloadLinkText +
              `${versionList.deviceName + " " + el.version}\n大小：${
                el.size
              }\n时间：${el.date}\n下载：${
                "https://ipsw.me" + el.downloadLink
              }\n\n`;
          }
        });
        $.notify(
          "Apple验证通道",
          `${versionList.deviceName}系统验证通道`,
          returnText + downloadLinkText
        );
        $.log(returnText + downloadLinkText);
        $done({});
      } else {
        getError("设备型号『 " + DeviceInformation + " 』获取内容为空！");
      }
    } else {
      getError(
        "BoxJs设备型号『 " +
          DeviceInformation +
          " 』设置错误，请确认型号是否正确！"
      );
    }
  } else {
    getError("请求内容失败");
  }
});

function getError(err) {
  $.notify(
    "XiaoMao_Apple验证通道❗️",
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
