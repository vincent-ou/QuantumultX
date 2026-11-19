/* 阳光老挝语 — 阳光老挝语会员解锁
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = www.ecigrxy.cn
 */
let status = isJSON($response.body);
let requestUrl = $request.url;
var obj = status
  ? JSON.parse(
      removeExtraSpaces($response.body)
        .replace(/\"isFree\":\w+/g, '"isFree":true')
        .replace(/\"videoVip\":\w+/g, '"videoVip":true')
        .replace(/\"translateVip\":\w+/g, '"translateVip":true')
        .replace(/\"unLock\":\w+/g, '"unLock":true')
        .replace(
          /\"translateVipDate\":\"\w+\"/g,
          '"translateVipDate":"2222-02-22 02:02:02"'
        )
        .replace(
          /\"videoVipDate\":\"\w+\"/g,
          '"videoVipDate":"2222-02-22 02:02:02"'
        )
    )
  : $response.body;
if (/^https:\/\/www\.ecigrxy\.cn\/api\/user\/info?/.test(requestUrl)) {
  obj.data.videoVip = true;
  obj.data.translateVip = true;
  obj.data.translateVipDate = "2222-02-22 02:02:02";
  obj.data.videoVipDate = "2222-02-22 02:02:02";
}
$done({ body: status ? JSON.stringify(obj) : obj });

function isJSON(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function removeExtraSpaces(jsonString) {
  var jsonObj = JSON.parse(jsonString);
  return JSON.stringify(jsonObj, function (key, value) {
    if (typeof value === "string") {
      return value.trim();
    }
    return value;
  });
}
