/* 白马剧场 — VIP 解锁
 * 原作者：89996462
 * 适配版本：1.0.1
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑；身份字段改取真实返回（原版写入作者身份/推广），逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = theater-api.sylangyue.xyz
 */

var body = $response.body.replace(/status":\w+/g,'status":true')
.replace(/expired_date":".*?"/g,'expired_date":"9999-01-01"')
$done({ body });
