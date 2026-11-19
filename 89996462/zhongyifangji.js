/* 中医方剂 — VIP 解锁
 * 原作者：89996462
 * 适配版本：2.3
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = medicine-books.meappstore.top
 */

var body = $response.body.replace(/vipState":\d/g,'vipState":1')
.replace(/vipEndTime":\w+/g,'vipEndTime":"2999-09-09"')
.replace(/vipEndDateTime":\w+/g,'vipEndDateTime":32493834549000')
$done({ body });
