/* 一万年日记 — 万年日记
 * 原作者：89996462
 * 适配版本：1.6.0
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.everjournal.life
 */

var body = $response.body.replace(/pro":\d/g,'pro":1')
.replace(/appUpdateType":\d/g,'appUpdateType":1')
.replace(/membershipType":\d/g,'membershipType":1')
$done({ body });
