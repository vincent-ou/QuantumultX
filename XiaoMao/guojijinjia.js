/* 国际金价 — 国际金价/上海黄金/实物黄金推送
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = （无 MITM，定时任务脚本）
 */
const $ = new Env("XiaoMaoGold");

let gold1 = new Promise((resolve, reject) => {
  let option1 = {
    url: encodeURI(
      "https://api-q.fx678img.com/exchangeSymbol.php?exchName=WGJS"
    ),
    method: "GET",
    headers: {
      Accept: "application/json, text/javascript, */*; q=0.01",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh;q=0.9",
      Connection: "keep-alive",
      Host: "api-q.fx678img.com",
      Origin: "https://quote.fx678.com",
      Referer: "https://quote.fx678.com/",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "cross-site",
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
      "sec-ch-ua":
        '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
    },
  };
  $.get(option1, (err, resp, response) => {
    if (response) {
      let obj = JSON.parse(response);
      resolve(obj);
    } else {
      getError("_error_1" + "获取失败，请稍后再试❗️");
    }
  });
});
let gold2 = new Promise((resolve, reject) => {
  let option1 = {
    url: encodeURI(
      "https://api-q.fx678img.com/exchangeSymbol.php?exchName=SGE"
    ),
    method: "GET",
    headers: {
      Accept: "application/json, text/javascript, */*; q=0.01",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh;q=0.9",
      Connection: "keep-alive",
      Host: "api-q.fx678img.com",
      Origin: "https://quote.fx678.com",
      Referer: "https://quote.fx678.com/",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "cross-site",
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
      "sec-ch-ua":
        '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
    },
  };
  $.get(option1, (err, resp, response) => {
    if (response) {
      let obj = JSON.parse(response);
      resolve(obj);
    } else {
      getError("_error_1" + "获取失败，请稍后再试❗️");
    }
  });
});
let gold3 = new Promise((resolve, reject) => {
  let url = encodeURI(
    "http://vip.stock.finance.sina.com.cn/q/view/vGold_Matter_History.php"
  );

  $.get({ url: url }, (err, resp, response) => {
    if (response) {
      let obj = response.replace(/\s*/g, "").toString();
      let startContentIndex = obj.indexOf("<table>");
      let endContentIndex = obj.indexOf("</table>");
      let content = obj.substring(startContentIndex, endContentIndex);
      let array = content
        .split("<tr")
        .filter((el) => el.indexOf(getGoneDay(0)) != -1);
      let returnText = array.map((e) => {
        let arr = e.split('<divalign="center">');
        return arr
          .map((el) => {
            let index = el.indexOf("</div>");
            if (el.indexOf("</div>") != -1) {
              return el.substring(0, index);
            }
          })
          .filter((l) => l != undefined);
      });
      resolve(returnText);
    } else {
      getError("_error_1" + "获取失败，请稍后再试❗️");
    }
  });
});
Promise.all([gold1, gold2, gold3])
  .then((result) => {
    let returnText =
      "今日金价数据获取成功，数据更新时间：[" + getGoneDay(0) + "]" + "\n\n\n";
    if (result.length != 3) {
      returnText = returnText + "获取数据结果出错，请稍后再试～";
    } else {
      let textIntelNation =
        "🥇国际黄金行情[实时]" +
        "\n\n" +
        "[名称]" +
        "     [最新价]" +
        "   [涨跌]" +
        "   [涨跌幅]" +
        "   [昨收]" +
        "\n\n";
      let textShangHai =
        "🎖上海黄金行情[实时]" +
        "\n\n" +
        "[名称]" +
        "     [最新价]" +
        "   [涨跌]" +
        "   [涨跌幅]" +
        "   [昨收]" +
        "\n\n";
      let textInKind =
        "🥇实物黄金行情[当天]" +
        "\n\n" +
        "[品牌]" +
        "   [产品]" +
        "         [价格]" +
        "     [涨跌]" +
        "\n\n";
      result.forEach((item, index) => {
        switch (index) {
          case 0:
            item.forEach((el) => {
              textIntelNation =
                textIntelNation +
                el.name +
                "   " +
                el.c.toString().padEnd(8) +
                "   " +
                (el.c - el.p).toFixed(2).toString().padEnd(5) +
                "   " +
                ((((el.c - el.p) / el.c) * 100).toFixed(2) + "%")
                  .toString()
                  .padEnd(6) +
                "   " +
                el.p +
                "\n";
            });
            break;
          case 1:
            item.forEach((el) => {
              let re = /[\u4E00-\u9FA5]/g;
              textShangHai =
                textShangHai +
                el.name.toString().padEnd(6) +
                "   " +
                el.c.toString().padEnd(8) +
                "   " +
                (el.c - el.p).toFixed(2).toString().padEnd(5) +
                "   " +
                ((((el.c - el.p) / el.c) * 100).toFixed(2) + "%")
                  .toString()
                  .padEnd(6) +
                "   " +
                el.p +
                "\n";
            });
            break;
          case 2:
            item.sort().forEach((el) => {
              textInKind =
                textInKind +
                el[1].toString().padEnd(3, "－") +
                "   " +
                el[2].toString().padEnd(8) +
                "   " +
                el[3].toString().padEnd(8) +
                "   " +
                el[7] +
                "\n";
            });
            break;
          default:
            break;
        }
      });
      returnText =
        returnText +
        textIntelNation +
        "\n\n" +
        textShangHai +
        "\n\n" +
        textInKind;
    }
    $.notify("💰XiaoMao_今日金价", "数据获取成功，点击查看详情～", returnText);
    $.log(returnText)
  })
  .catch((error) => {
    console.log(error);
    getError("_error_1");
  });
function getGoneDay(n = 0, yearFlag = true) {
  let myDate = new Date();
  myDate.setDate(myDate.getDate() - n);
  let month = myDate.getMonth() + 1;
  let day = myDate.getDate();
  let result =
    "" +
    (yearFlag ? myDate.getFullYear() : "") +
    "-" +
    (month < 10 ? "0" + month : month) +
    "-" +
    (day < 10 ? "0" + day : day);
  return result;
}
function getError(params = "") {
  $.notify(
    "💰XiaoMao_今日金价",
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
