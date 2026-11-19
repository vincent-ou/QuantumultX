/* 天乙八字排版 — VIP 解锁
 * 原作者：89996462
 * 适配版本：未注明
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = app.itypan.com
 */

var body = $response.body.replace(/"member":(true|false)/g,'"member":true')
.replace(/"memberLevel":(\d+|null)/g,'"memberLevel":999')
.replace(/"memberLevelName":"[^"]*"|"memberLevelName":null/g,'"memberLevelName":"至尊VIP"')
.replace(/"expireTime":"[^"]*"|"expireTime":null/g,'"expireTime":"9999-12-31T23:59:59.000+08:00"')
.replace(/"appleExpireTime":"[^"]*"|"appleExpireTime":null/g,'"appleExpireTime":"9999-12-31T23:59:59.000+08:00"')
$done({ body });
