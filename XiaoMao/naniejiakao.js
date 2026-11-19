/* 拿捏驾考 — 拿捏驾考会员解锁
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = nanie.flyingeffect.com
 */
let status = isJSON($response.body);
let requestUrl = $request.url;
var obj = status
  ? JSON.parse(
      removeExtraSpaces($response.body)
        .replace(
          /\"vip_end_time\":\w+/g,
          '"vip_end_time":"2222-02-22 22:22:22"'
        )
        .replace(
          /\"experience_vip_end_time\":\w+/g,
          '"experience_vip_end_time":"2222-02-22 22:22:22"'
        )
        .replace(/\"is_experience_vip\":\w+/g, '"is_experience_vip":true')
        .replace(/\"is_vip\":\w+/g, '"is_vip":true')
        .replace(/\"is_permanent_vip\":\w+/g, '"is_permanent_vip":1')
        .replace(/\"is_trial\":\w+/g, '"is_trial":1')
        .replace(/\"vip_type\":\w+/g, '"vip_type":1')
        .replace(
          /\"remove_wrongbook_times\":\w+/g,
          '"remove_wrongbook_times":999999'
        )
    )
  : $response.body;
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
