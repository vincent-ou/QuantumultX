/* 五年日记本 — VIP 解锁
 * 原作者：89996462
 * 适配版本：3.17.25
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = shared.lc-cn-n1-shared.com
 */

var body = $response.body.replace(/"vipTime":\d+/g,'"vipTime":4567891456')
.replace(/"isPro":false/g,'"isPro":true')
.replace(/"isVip":false/g,'"isVip":true')
$done({ body });
