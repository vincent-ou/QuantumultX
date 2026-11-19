/* 蜜糖小剧场 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.0
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = honeydjapi.amkj.shop
 */

var body = $response.body.replace(/buyVipState":\d/g,'buyVipState":1')
.replace(/vipEnabled":\w+/g,'vipEnabled":true')


$done({ body });
