/* JianXun — 解锁订阅
 * 原作者：89996462
 * 适配版本：5.0.1
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.tipsoon.com
 */

body = $response.body.replace(/\"is_vip":\w+/g, '\"is_vip":true')

$done({body});
