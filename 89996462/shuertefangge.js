/* 舒尔特方格 — VIP 解锁
 * 原作者：89996462
 * 适配版本：1.0.8
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = app.rongfeng.work
 */

var body = $response.body.replace(/isForever":\d+/g,'isForever":1')
.replace(/isVIP":\d+/g,'isVIP":1')
$done({ body });
