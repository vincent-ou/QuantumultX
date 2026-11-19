/* 追读小说 — VIP 解锁
 * 原作者：89996462
 * 适配版本：8.0.7
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = dj.palmestore.com
 */

var body = $response.body.replace(/vipType":\d/g,'vipType":1')
.replace(/vipExpire":\d+/g,'vipExpire":32472115200')
.replace(/expireDate":".*?"/g,'expireDate":"2999-09-09"')
$done({ body });
