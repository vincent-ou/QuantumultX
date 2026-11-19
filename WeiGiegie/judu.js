/* 句读 — 句读
 * 原作者：WeiGiegie
 * 适配版本：4.3.0
 * 清理整理：Muse — 去除作者推广/Telegram 链接与无效注释，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = judouapp.com
 */

var body = $response.body; 
let obj = JSON.parse($response.body);
obj.is_member = true ;
obj.is_admin = true ;
obj.is_year_member = true ;
obj.member_expired_at = 32493834549 ;
obj.is_bind_phone = true ;
$done({body: JSON.stringify(obj)});
