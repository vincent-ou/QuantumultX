/* 时光短剧 — VIP 解锁
 * 原作者：89996462
 * 适配版本：1.2
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑；身份字段改取真实返回（原版写入作者身份/推广），逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = iosqwrmdj.sanwubeixin.cn
 */

var body = $response.body.replace(/isVip":\w+/g,'isVip":true')
.replace(/vip_time":\d+/g,'vip_time":8888888888')
.replace(/vip_type":\d/g,'vip_type":1')
.replace(/vip_money":\d/g,'vip_money":1')
$done({ body });
