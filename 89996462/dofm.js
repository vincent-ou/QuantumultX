/* Dofm — Dofm
 * 原作者：89996462
 * 适配版本：2.5.0
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.cikelink.com
 */

var body = $response.body.replace(/status":\d/g,'status":1')
.replace(/expireTime":\d+/g,'expireTime":4567891456')
.replace(/expireUnixTime":\d+/g,'expireUnixTime":4567891456')
.replace(/canPlay":\w+/g,'canPlay":true')
$done({ body });
