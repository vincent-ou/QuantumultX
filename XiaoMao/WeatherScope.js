/* WeatherScope — WeatherScope 会员解锁
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = weather.aviatorassistant.com
 */
let status = isJSON($response.body);
let requestUrl = $request.url;
var obj = status ? JSON.parse($response.body) : $response.body;
if (/^https:\/\/weather\.aviatorassistant\.com?/.test(requestUrl)) {
  if (
    obj.hasOwnProperty("status") &&
    obj.hasOwnProperty("data") &&
    obj.data.hasOwnProperty("user")
  ) {
    obj.data.user.is_internal_subscription_free_user = 1;
    obj.data.user.subscription_expiration = "2222-02-22T07:56:01.669Z";
    obj.data.hasOwnProperty("active_free_promos")
      ? (obj.data.active_free_promos = [])
      : "";
  }
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
