/* 光卷 — 光卷
 * 原作者：89996462
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = lume96resapi.imendon.com
 */

var body = $response.body.replace(/"isValid":\d+/g,'"isValid":1')
.replace(/"expiredTs":\d+/g,'"expiredTs":9999999999999')
.replace(/"vipType":\d+/g,'"vipType":2')
$done({ body });
