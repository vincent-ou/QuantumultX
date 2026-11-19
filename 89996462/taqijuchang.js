/* 塔奇剧场 — VIP 解锁
 * 原作者：89996462
 * 适配版本：10.0.4
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = quickapi.xiegangsir.com
 */

var body = $response.body.replace(/vip_time":\d+/g,'vip_time":8888888888')
$done({ body });
