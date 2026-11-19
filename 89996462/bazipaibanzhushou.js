/* 八字排版助手 — VIP 解锁
 * 原作者：89996462
 * 适配版本：1.2.7
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑；身份字段改取真实返回（原版写入作者身份/推广），逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = xz1.mifengzongdongyuan.com
 */

var body = $response.body.replace(/vip":\d+/g,'vip":1')
.replace(/vipHours":\d+/g,'vipHours":32472115200')
.replace(/vipExpiryDate":\w+/g,'vipExpiryDate":"2999-01-01 00:00:00"')
$done({ body });
