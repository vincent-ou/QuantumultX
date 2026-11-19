/* Silimini — VIP 解锁
 * 原作者：89996462
 * 适配版本：1.3.1
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = silimini.bigwinepot.com
 */

var body = $response.body.replace(/"member":0/g,'"member":1')
$done({ body });
