/* 可拍 — 解锁订阅
 * 原作者：89996462
 * 适配版本：2.7.0
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = fxshot-api.afunapp.com
 */

var body = $response.body.replace(/vip_remain_time":\d+/g,'vip_remain_time":4098497565')
.replace(/gender":\d/g,'gender":1')
$done({ body });
