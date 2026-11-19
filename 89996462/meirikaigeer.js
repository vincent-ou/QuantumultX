/* 每日凯格尔 — VIP 解锁
 * 原作者：89996462
 * 适配版本：10.0.3
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = kegelapi.dailystretch.app
 */

var obj = JSON.parse(
  $response.body
    .replace(/\"isSubscriber\":\w+/g, '"isSubscriber":true')
    .replace(/\"lock\":\w+/g, '"lock":false')
);

$done({ body: JSON.stringify(obj) });
