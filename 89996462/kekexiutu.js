/* 可可修图 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.1.1
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = cocamapi.imendon.com
 */

var body = $response.body.replace(/isValid":\d/g,'isValid":1')
$done({ body });
