/* Amemei 游戏列表 — Amemei 游戏清单定时推送
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = （无 MITM，定时任务脚本）
 */
const $ = new Env("XiaoMaoAmemeiGame");

// 获取内容
function extractLinksAndText(htmlString) {
  // 创建一个虚拟的DOM元素，用来解析HTML字符串
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  // 选择所有的 <a> 标签
  const links = doc.querySelectorAll("a");
  // 提取每个 <a> 标签的 href 属性和文本内容并放入数组
  const linksAndText = [];
  links.forEach((link) => {
    linksAndText.push({
      href: link.href,
      text: link.textContent.trim(),
    });
  });
  return linksAndText;
}

// 核心函数
let option = {
  url: encodeURI("https://amemei-lists.top/posts/49e03169/"),
  method: "GET",
};
$.get(option, (error1, resp1, response) => {
  if (response) {
    let text = response.substring(
      response.indexOf("遊戲清單"),
      response.length
    );
    let textSource = text.substring(
      text.indexOf("<ul>"),
      text.indexOf("</ul>") + 5
    );
    let gameList = extractLinksAndText(textSource);
    if (gameList.length) {
      let returnText =
        `🎮遊戲清單「共${gameList.length}款」` +
        "\n" +
        "{数据来源于amemei-lists.top}" +
        "\n" +
        "{网络不畅建议开启代理，游戏进度保存于浏览器缓存，请勿使用无痕模式!}" +
        "\n\n";
      gameList.map((el, i) => {
        returnText =
          returnText +
          "🕹️" +
          (i + 1).toString().padStart(2, "0") +
          "  " +
          el.text +
          "\n" +
          el.href +
          "\n\n";
      });
      $.notify(
        "🎮XiaoMao_Amemei游戏列表",
        `游戏列表成功，共${gameList.length}款，点击查看详情`,
        returnText
      );
      $.log(returnText);
      $done({});
    } else {
      getError("内容为空");
    }
  } else {
    getError("5001");
  }
});

function getError(err) {
  $.notify(
    "🎮XiaoMao_Amemei游戏列表❗️",
    "",
    "🚧系统错误，请稍后再试❗️" + err,
    ""
  );
  $done({});
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
