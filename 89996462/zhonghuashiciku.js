/* 中华诗词库 — 中华诗词库
 * 原作者：89996462
 * 适配版本：1.7
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.chuangqi.store
 */

var body = $response.body.replace(/vip_end_time":null/g,'vip_end_time":4099040228000')
.replace(/is_ad_vip":\d/g,'is_ad_vip":1')
.replace(/isvip":\d/g,'isvip":1')
$done({ body });
