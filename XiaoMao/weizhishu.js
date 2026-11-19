/* 胃之书 — 胃之书会员解锁
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = bellybook-app-api.bellybook.cn
 */
let status = isJSON($response.body);
let requestUrl = $request.url;
var obj = status
  ? JSON.parse(
      removeExtraSpaces($response.body)
        .replace(/\"vip_level\":\w+/g, '"vip_level":99')
        .replace(/\"daily_token_limit\":\w+/g, '"daily_token_limit":33333')
        .replace(/\"invite_user_number\":\w+/g, '"invite_user_number":6666')
        .replace(/\"floder_limit\":\w+/g, '"floder_limit":33333')
        .replace(
          /\"daily_collection_limit\":\w+/g,
          '"daily_collection_limit":33333'
        )
        .replace(/\"did_use_daily_report\":\w+/g, '"did_use_daily_report":true')
        .replace(
          /\"did_input_invite_code\":\w+/g,
          '"did_input_invite_code":true'
        )
        .replace(/\"is_superuser\":\w+/g, '"is_superuser":true')
        .replace(
          /\"did_user_floder_create\":\w+/g,
          '"did_user_floder_create":true'
        )
        .replace(
          /\"vip_expire_time\":\"[^\"]*\"/g,
          '"vip_expire_time":"7955085722000"'
        )
        .replace(
          /\"vip_update_time\":\"[^\"]*\"/g,
          '"vip_update_time":"7955085722000"'
        )
        .replace(
          /\"my_vip_name\":\"[^\"]*\"/g,
          '"my_vip_name":"尊贵的胃之书会员"'
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
