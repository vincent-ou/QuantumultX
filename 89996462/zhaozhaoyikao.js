/* 昭昭医考 — VIP 解锁
 * 原作者：89996462
 * 适配版本：8.0.6
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.yikao88.com
 */

var body = $response.body.replace(/buy":\w+/g,'buy":true')
.replace(/freeTrial":\d/g,'freeTrial":1')
$done({ body });
