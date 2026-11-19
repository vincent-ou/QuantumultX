/* 海豚🐬儿童英语 — 海豚🐬儿童英语
 * 原作者：89996462
 * 适配版本：3.9.9
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = english.dolphinmedia.cn
 */

var body = $response.body.replace(/"canStudy":\d/g,'"canStudy":1')
.replace(/"freeEndTime":\d+/g,'"freeEndTime":4094421947000')
.replace(/"freed":\d/g,'"freed":1')
.replace(/"locked":\d/g,'"locked":0')
.replace(/"freeEndTime":".*?"/g,'"freeEndTime":"2025-04-27 08:01:01"')
$done({ body });
