/* 海报制作大师 — 解锁订阅
 * 原作者：89996462
 * 适配版本：3.3.0
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = poster.leminet.cn
 */

var body = $response.body.replace(/vip":\w+/g,'vip":true')
.replace(/vip_expire":\d+/g,'vip_expire":32480034939')
$done({ body });
