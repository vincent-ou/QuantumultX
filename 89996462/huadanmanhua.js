/* 画耽漫画 — VIP 解锁
 * 原作者：89996462
 * 适配版本：1.1.2
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑；身份字段改取真实返回（原版写入作者身份/推广），逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = www.shutiaomh.com
 */

var body = $response.body.replace(/vipDays":\d/g,'vipDays":1')
.replace(/inviteCode":".*?"/g,'inviteCode":"89996462"')
.replace(/expireDays":\w+/g,'expireDays":9999')
$done({ body });
