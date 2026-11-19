/* 柚子轻断食 — 柚子轻断食
 * 原作者：89996462
 * 适配版本：2.6.5
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = xy.jingcle.com
 */

var body = $response.body.replace(/is_vip":\w+/g,'is_vip":true')
.replace(/vip_type":".*?"/g,'vip_type":"终身会员"')

$done({ body });
