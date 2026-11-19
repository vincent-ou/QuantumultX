/* 小歪微商 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.0.9
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = xw.jietuguanjia.com
 */

var body = $response.body.replace(/isVip":\w+/g,'isVip":true')
.replace(/vipSignTime":".*?"/g,'vipSignTime":"9999-03-22 16:18:58"')
$done({ body });
