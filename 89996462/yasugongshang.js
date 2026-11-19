/* 雅俗共赏 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.0.3
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = apps-api.lianaishouce.cn
 */

var body = $response.body.replace(/isForeverVip":\w+/g,'isForeverVip":true')
.replace(/status":\d/g,'status":1')
.replace(/vipLevel":\d/g,'vipLevel":8')
.replace(/memberStatus":\d/g,'memberStatus":1')
$done({ body });
