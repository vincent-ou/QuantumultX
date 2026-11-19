/* 玛卡相机 — VIP 解锁
 * 原作者：89996462
 * 适配版本：1.6.3
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = ai-pic.xdplt.com
 */

var body = $response.body.replace(/isVip":\d/g,'isVip":1')
.replace(/vipExpireTime":\w+/g,'vipExpireTime":8887064968000')
.replace(/isForeverVip":\d/g,'isForeverVip":1')
.replace(/diamond":\d+/g,'diamond":888888')
$done({ body });
