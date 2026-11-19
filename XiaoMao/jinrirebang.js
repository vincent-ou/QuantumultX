/* 今日热榜 — 今日热榜 VIP 解锁
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api2.tophub.app
 */
function getGoneDay(n = 0, yearFlag = true) {
  let myDate = new Date();
  myDate.setDate(myDate.getDate() - n);
  let month = myDate.getMonth() + 1;
  let day = myDate.getDate();
  let result =
    "" +
    (yearFlag ? myDate.getFullYear() : "") +
    "/" +
    (month < 10 ? "0" + month : month) +
    "/" +
    (day < 10 ? "0" + day : day);
  return result;
}
var obj = JSON.parse($response.body);
var $XiaoMaoSvip = new Env("HotListApp");
var appName = `XiaoMao-HotListvip`;
var XiaoMaoSvip = "";
let XiaoMaoEndTime = null;
let SvipDate = null;
!(async () => {
  await XiaoMaoFunction();
})()
  .catch((err) => {
    $XiaoMaoSvip.log(err);
    setTimeout(() => {
      $XiaoMaoSvip.done();
    }, 3000);
  })
  .finally(() => {
    console.log(appName + "设置成功");
    setTimeout(() => {
      $XiaoMaoSvip.done();
    }, 5000);
  });
function XiaoMaoFunction() {
  if (
    $XiaoMaoSvip.read("HotListVipYear") &&
    $XiaoMaoSvip.read("HotListVipMonth") &&
    $XiaoMaoSvip.read("HotListVipDay")
  ) {
    SvipDate = new Date(
      $XiaoMaoSvip.read("HotListVipYear") +
        "/" +
        $XiaoMaoSvip.read("HotListVipMonth") +
        "/" +
        $XiaoMaoSvip.read("HotListVipDay")
    ).getTime();
    if (!SvipDate) {
      $XiaoMaoSvip.notify(
        appName,
        "",
        "会员日期设置错误，请输入正确的日期范围!"
      );
      XiaoMaoSvip = getGoneDay(-8);
    } else {
      XiaoMaoSvip =
        $XiaoMaoSvip.read("HotListVipYear") +
        "/" +
        $XiaoMaoSvip.read("HotListVipMonth") +
        "/" +
        $XiaoMaoSvip.read("HotListVipDay");
    }
  } else {
    XiaoMaoSvip = getGoneDay(-8);
  }
  XiaoMaoEndTime = new Date(XiaoMaoSvip).getTime() / 1000;
}
if ($response.body) {
  let requestUrl = $request.url;
  if (/^https:\/\/api2\.tophub\.app\/account\/sync?/.test(requestUrl)) {
    obj.hasOwnProperty("data")
      ? ((obj.data.is_vip_now = true),
        (obj.data.is_vip = 1),
        (obj.data.vip_expired = XiaoMaoEndTime))
      : "";
  } else if (
    /^https:\/\/api2\.tophub\.app\/my\/items?/.test(requestUrl) ||
    /^https:\/\/api2\.tophub\.app\/my\/channels\/.+\/items?/.test(requestUrl)
  ) {
    if (obj.hasOwnProperty("data")) {
      if (obj.data.items.length) {
        let arr = obj.data.items;
        let newArr = [];
        arr.forEach((el) => {
          if (el.ID != -1) {
            let description = (el.description + ">")
              .replace(/<\/?.+?>/g, "")
              .replace(/>/g, "")
              .replace(/</g, "")
              .replace(/[\r\n]/g, "")
              .replace(/\ +/g, "");
            el.title =
              el.title +
              (description == "" ? "" : "\n" + "📌" + description + "...");
            newArr.push(el);
          }
        });
        obj.data.items = newArr;
      }
    }
  } else if (
    /^https:\/\/api2\.tophub\.app\/my\/alerts\/items?/.test(requestUrl)
  ) {
    if (obj.hasOwnProperty("data")) {
      if (obj.data.items.length) {
        let arr = obj.data.items;
        let newArr = [];
        arr.forEach((el) => {
          el.items.forEach((el2) => {
            let description = (el2.description + ">")
              .replace(/<\/?.+?>/g, "")
              .replace(/>/g, "")
              .replace(/</g, "")
              .replace(/[\r\n]/g, "")
              .replace(/\ +/g, "");
            el2.title =
              el2.title +
              (description == "" ? "" : "\n" + "📌" + description + "...");
          });
          newArr.push({ items: el.items });
        });
        obj.data.items = newArr;
      }
    }
  } else if (/^https:\/\/api2\.tophub\.app\/explore?/.test(requestUrl)) {
    if (
      obj.hasOwnProperty("data") &&
      obj.data.hasOwnProperty("section_nodes") &&
      obj.data.section_nodes.length
    ) {
      let node = [];
      obj.data.section_nodes.map((item) => {
        if (!item.title.includes("今日必抢") && !item.title.includes("购物")) {
          let node_kid = [];
          if (item.nodes.length) {
            item.nodes.map((el) => {
              if (!el.name.includes("商品")) {
                node_kid.push(el);
              }
            });
          }
          item.nodes = node_kid;
          node.push(item);
        }
      });
      obj.data.section_nodes = node;
    }
  }
  $done({ body: JSON.stringify(obj) });
} else {
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
