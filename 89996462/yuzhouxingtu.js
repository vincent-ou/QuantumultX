/* 宇宙星图 — VIP 解锁
 * 原作者：89996462
 * 适配版本：v2.4.5
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.starsage.cn
 */

var body = $response.body.replace(/vip":\d/g,'vip":1')
.replace(/vip_expire_time":\d+/g,'vip_expire_time":8888888888')
$done({ body });
