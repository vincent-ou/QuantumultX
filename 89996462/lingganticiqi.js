/* 灵敢提词器 — VIP 解锁
 * 原作者：89996462
 * 适配版本：3.0.1
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = teleprompter-api.quthing.com
 */

var body = $response.body.replace(/validVip":\w+/g,'validVip":true')
.replace(/expireTime":\d+/g,'expireTime":253392455349000')
.replace(/vipType":\d+/g,'vipType":3')
.replace(/trialVip":\w+/g,'trialVip":true')
$done({ body });
