/* 杂志天下 — 杂志天下
 * 原作者：89996462
 * 适配版本：1.2.0
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = www.fuyoutech.club
 */

var body = $response.body.replace(/"memberStatus":\d/g,'"memberStatus":2')
.replace(/"finishTime":null/g,'"finishTime":"2099-11-11 00:00:00"')
.replace(/"startTime":null/g,'"startTime":"2023-09-01 00:00:00"')
$done({ body });
