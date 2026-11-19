/* 面包拼图 — VIP 解锁
 * 原作者：89996462
 * 适配版本：1.0.9
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑；身份字段改取真实返回（原版写入作者身份/推广），逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = bread28resapi.wscreativity.com
 */

var body = $response.body.replace(/isValid":\d/g,'isValid":1')
.replace(/expiredTs":\d+/g,'expiredTs":8888888888000')
.replace(/vipType":\d/g,'vipType":1')
$done({ body });
