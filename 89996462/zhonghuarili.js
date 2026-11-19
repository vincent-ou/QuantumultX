/* 中华日历 — VIP 解锁
 * 原作者：89996462
 * 适配版本：3.6.5
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = wnl28.jiemengjia.com
 */

var body = $response.body.replace(/.+/g,'{"code":"E00000000","msg":"success","data":{"is_vip":1,"end_time":"2099-12-24 01:15:45","member_type":5}}')
$done({ body });
