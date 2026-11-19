/* 句读 — 解锁订阅
 * 原作者：89996462
 * 适配版本：4.3.0
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = judouapp.com
 */

var body = $response.body.replace(/is_member":\w+/g,'is_member":true')
.replace(/is_admin":\w+/g,'is_admin":true')
.replace(/is_year_member":\w+/g,'is_year_member":true')
.replace(/member_expired_at":\w+/g,'member_expired_at":32493834549')
.replace(/is_bind_phone":\w+/g,'is_bind_phone":true')
$done({ body });
