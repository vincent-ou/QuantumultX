/* 过期啦 — 解锁订阅
 * 原作者：89996462
 * 适配版本：2.9.8
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = expire.vanemu.com
 */

body = $response.body.replace(/\"user_is_pro":\w+/g, '\"user_is_pro":true').replace(/\"group_is_pro":\w+/g, '\"group_is_pro":true')

$done({body});
