/* 社恐快跑 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.2.3
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = ig.api.pangbaoapp.com
 */

var body = $response.body
.replace(/"memberFlag":false/g,'"memberFlag":true')
.replace(/"memberExpireDay":null/g,'"memberExpireDay":"2099-11-11"')
$done({ body });
