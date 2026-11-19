/* 开练 — VIP 解锁
 * 原作者：89996462
 * 适配版本：3.3.94
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = fitness-notes.nanxiani.cn
 */

var body = $response.body.replace(/vip_type":\d/g,'vip_type":6')
.replace(/vip_expire":".*?"/g,'vip_expire":"9999-10-20"')
$done({ body });
