/* 糖果追剧 — VIP 解锁
 * 原作者：89996462
 * 适配版本：1.0.3
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = candydjapi.winner1319.top
 */

var body = $response.body.replace(/buyVipState":\d/g,'buyVipState":1')
.replace(/loginType":\d/g,'loginType":1')
.replace(/vipEnabled":\w+/g,'vipEnabled":true')
$done({ body });
