/* 幕布 — VIP 解锁
 * 原作者：89996462
 * 适配版本：2.28.5
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api2.mubu.com
 */

var body = $response.body.replace(/vipEndDate":""/g,'vipEndDate":"99999999"')
.replace(/level":\d+/g,'level":1')
$done({ body });
