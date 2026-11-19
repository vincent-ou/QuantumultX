/* 限制文学 — 限制文学更新推送
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = （无 MITM，定时任务脚本）
 */
const $ = new Env("XiaoMaoImprisonNovel");

// 获取随机日期
function getRandomDate() {
  const startDate = new Date(2020, 10, 1); // Months are 0-based, so 10 is November
  const currentDate = new Date();
  const startTimestamp = startDate.getTime();
  const endTimestamp = currentDate.getTime();
  const randomTimestamp =
    Math.floor(Math.random() * (endTimestamp - startTimestamp + 1)) +
    startTimestamp;
  const randomDate = new Date(randomTimestamp);
  const year = randomDate.getFullYear();
  const month = String(randomDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so add 1
  const day = String(randomDate.getDate()).padStart(2, "0");
  return `${year}/${month}/${day}`;
}
// 获取标题
function extractBookmarkTitles(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const bookmarkLinks = doc.querySelectorAll('a[rel="bookmark"]');
  const titles = Array.from(bookmarkLinks).map((link) =>
    link.getAttribute("title")
  );
  return titles ?? [];
}
// 获取随机元素
function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
// 获取内容
function extractPContent(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const articles = doc.querySelectorAll("article");
  const pContents = Array.from(articles).flatMap((article) => {
    const entryContentDiv = article.querySelector("div.entry-content");
    if (entryContentDiv) {
      const pTags = entryContentDiv.querySelectorAll("p");
      return Array.from(pTags).map((p) => p.innerHTML);
    }
    return [];
  });
  const strippedContents = pContents.map((content) =>
    content
      .replace(/<[^>]*>.*?<\/[^>]*>/g, "")
      .replace(/【[^】]*】/g, "")
      .replace(/\s+/g, " ")
      .replace(/\n/g, "")
      .trim()
  );
  return strippedContents;
}
// 获取分页链接
function getLinks(params) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(params, "text/html");
  const paginationDiv = doc.querySelector("div.entry-pagination.pagination");
  const hrefs = [];
  if (paginationDiv) {
    const links = paginationDiv.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
      hrefs.push(links[i].href);
    }
  }
  return hrefs;
}
// 获取分页内容
async function getLinkContent(params, contentList2 = []) {
  let linksList = getLinks(params);
  if (linksList.length) {
    const promises = [];
    for (let index = 0; index < linksList.length; index++) {
      const el = linksList[index];
      let linksOption = {
        url: el,
        method: "GET",
      };
      const promise = new Promise((resolve, reject) => {
        $.get(linksOption, (error1, resp1, response) => {
          if (response) {
            const content = extractPContent(response);
            contentList2.push(content);
            resolve();
          } else {
            reject("Error");
          }
        });
      });
      promises.push(promise);
    }
    await Promise.all(promises);
  }
  return contentList2;
}

// 核心函数
let titleUrl = `https://aaanovel.com/${getRandomDate()}`;
let titleOption = {
  url: encodeURI(titleUrl),
  method: "GET",
};
$.get(titleOption, (error1, resp1, response) => {
  if (response) {
    let titleList = extractBookmarkTitles(response);
    if (titleList.length) {
      let titleName = getRandomElement(titleList);
      let contentUrl = `${titleUrl}/${titleName}/`;
      let contentOption = {
        url: encodeURI(contentUrl),
        method: "GET",
      };
      $.get(contentOption, async (error2, resp2, response2) => {
        if (response2) {
          let contentList1 = await extractPContent(response2);
          await getLinkContent(response2)
            .then((contentList2) => {
              let contentListAll = [];
              contentListAll.push(contentList1);
              contentListAll.push(...contentList2);
              if (contentListAll.length) {
                let textNumberTotal = 0;
                let numberParams = {
                  0: "一",
                  1: "二",
                  2: "三",
                  3: "四",
                  4: "五",
                  5: "六",
                  6: "七",
                  7: "八",
                  8: "九",
                  9: "十",
                };
                contentListAll.map((contentList, contentIndex) => {
                  if (contentList.length) {
                    let returnText = "";
                    let returnTitle = `『大师文学之${titleName}』【第${
                      numberParams[contentIndex]
                    }章节 共${numberParams[contentListAll.length - 1]}章】`;
                    contentList.map((el, i) => {
                      returnText = returnText + (i != 0 ? "\n\n" : "") + el;
                    });
                    let returnTextLength = returnText.replace(
                      /\s+/g,
                      ""
                    ).length;
                    let convertReturnText =
                      returnTitle +
                      "（本章字数:" +
                      returnTextLength +
                      "）" +
                      "\n\n" +
                      returnText;

                    textNumberTotal = textNumberTotal + returnTextLength;
                    $.notify("大师文学", "读万卷书行万里路", convertReturnText);
                  }
                });
                console.log(
                  `已完成文学作品『${titleName}』的全部内容加载，共${
                    numberParams[contentListAll.length - 1]
                  }章节，共计字数${textNumberTotal}`
                );
                $done({});
              } else {
                getError("5012");
              }
            })
            .catch((err) => {
              getError("5013");
            });
        } else {
          getError("5011");
        }
      });
    } else {
      $.notify(
        "大师文学",
        "数据获取失败❗️请重试❗️",
        "文章随机刷新，存在空白章节情况，三次刷不出来乃天命所致，要不咱就不看了？🙈"
      );
      $done({});
    }
  } else {
    getError("5001");
  }
});

function getError(err) {
  $.notify(
    "🔞XiaoMao_限制文学❗️",
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
