/* 九州短剧 — VIP 解锁
 * 原作者：89996462
 * 适配版本：1.0
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = iosshortplay.sanwubeixin.cn
 */

var body = $response.body.replace(/isVip":\w+/g,'isVip":true')
.replace(/vip_time":\d+/g,'vip_time":253392455349000')
.replace(/vip_type":\d/g,'vip_type":1')
.replace(/money":\d+/g,'money":8888')
$done({ body });
