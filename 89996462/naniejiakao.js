/* 拿捏驾考 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.1.7
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = nanie.flyingeffect.com
 */

var body = $response.body.replace(/vip_end_time":".*?"/g,'vip_end_time":"2099-08-16 09:13:47"')
.replace(/is_permanent_vip":\d/g,'is_permanent_vip":1')
.replace(/vip_type":\d/g,'vip_type":1')
.replace(/is_vip":\w+/g,'is_vip":true')
.replace(/is_experience_vip":\w+/g,'is_experience_vip":true')
$done({ body });
