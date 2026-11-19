/* 快手小程序 — 解锁订阅
 * 原作者：89996462
 * 适配版本：v2.3.0
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = curriculum-api.yizhiweixin.com
 */

body = $response.body.replace(/\"is_free":\d/g, '\"is_free":1').replace(/\"unlock":\d/g, '\"unlock":1')
$done({body});
