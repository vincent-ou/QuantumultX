/* 青橙日记全家桶 — VIP 解锁
 * 原作者：89996462
 * 适配版本：8.2
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = 182.92.64.124
 */

var body = $response.body.replace(/vipInfo":"\d"/g,'vipInfo":"1"')
$done({ body });
