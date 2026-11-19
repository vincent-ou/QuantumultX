/* 易截图2 — 易截图2
 * 原作者：89996462
 * 适配版本：1.2.2
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = 1jietu.com
 */

var body = $response.body.replace(/vip":"\d"/g,'vip":"1"')
.replace(/group_id":"\d"/g,'group_id":"3"')

$done({ body });
