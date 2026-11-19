/* Wake — VIP 解锁
 * 原作者：89996462
 * 适配版本：4.0.0
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.wakeyoga.com
 */

var body = $response.body.replace(/"isOrderSvip":\w+/g,'"isOrderSvip":true')
.replace(/"uSvipExpireAt":\d+/g,'"uSvipExpireAt":4567891456')
.replace(/"lifetimeMembershipStatus":\d/g,'"lifetimeMembershipStatus":1')
.replace(/"canPlay":\w+/g,'"canPlay":1')
.replace(/"user_has":\w+/g,'"user_has":1')
.replace(/"order_status":\d/g,'"order_status":1')
.replace(/"order_expire_at":null/g,'"order_expire_at":4567891456')
.replace(/"canPlay":\d/g,'"canPlay":1')
.replace(/"vipType":\d/g,'"vipType":1')
.replace(/"isBuy":\d/g,'"isBuy":1')
.replace(/"isSvip":\d/g,'"isSvip":1')
.replace(/"isCantplay":\d/g,'"isCantplay":0')
.replace(/"unloakDay":\d+/g,'"unloakDay":99')
$done({ body });
