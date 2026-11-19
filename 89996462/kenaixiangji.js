/* 可奈相机 — VIP 解锁
 * 原作者：89996462
 * 适配版本：2.4.2
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = motu.touchat.online
 */

var body = $response.body.replace(/vipLevel":\d/g,'vipLevel":3')
$done({ body });
