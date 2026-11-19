/* 每日凯格尔 — 每日凯格尔 Pro 解锁
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = kegelapi.dailystretch.app
 */
var obj = JSON.parse(
  $response.body
    .replace(/\"isSubscriber\":\w+/g, '"isSubscriber":true')
    .replace(/\"lock\":\w+/g, '"lock":false')
);

$done({ body: JSON.stringify(obj) });
