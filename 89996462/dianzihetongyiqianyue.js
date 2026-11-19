/* 电子合同易签约 — VIP 解锁
 * 原作者：89996462
 * 适配版本：1.1
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = iosdzhtyqy.sanwubeixin.cn
 */

var body = $response.body.replace(/isVip":\w+/g,'isVip":true')
.replace(/vip_time":\d+/g,'vip_time":4092599349')
.replace(/vip_type":\d/g,'vip_type":1')
.replace(/vip_money":\d+/g,'vip_money":8888')
.replace(/money":\d+/g,'money":8888')
$done({ body });
