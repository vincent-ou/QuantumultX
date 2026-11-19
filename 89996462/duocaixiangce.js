/* 多彩相册 — VIP 解锁
 * 原作者：89996462
 * 适配版本：1.1.0
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = photo.yuan9.cn
 */

var body = $response.body.replace(/expiration_time":".*?"/g,'expiration_time":"9999-10-30 10:50:56"')
.replace(/vip_type":\w+/g,'vip_type":2')
.replace(/free_trial":\d/g,'free_trial":1')
.replace(/is_vip":\d/g,'is_vip":1')
$done({ body });
