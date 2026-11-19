/* 中国房价 — 中国房价行情部分功能解锁
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.crevalue.cn
 */
var obj = JSON.parse(
  $response.body
    .replace(/"isBuy":false/g, '"isBuy":true')
    .replace(/"isTry":false/g, '"isTry":true')
    .replace(/"isAllow":false/g, '"isAllow":true')
    .replace(/"isNew":"false"/g, '"isNew":"true"')
);
let requestUrl = $request.url;

if (/^http:\/\/api\.crevalue\.cn\/sup\/v2\/user\/account?/.test(requestUrl)) {
  obj.isVerified = 1;
  obj.isValid = 1;
  obj.vip = true;
}
$done({ body: JSON.stringify(obj) });
