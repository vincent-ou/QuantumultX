/* 视频转文字 — VIP 解锁
 * 原作者：89996462
 * 适配版本：2.5.9
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = paperwork.szshht.cn
 */

var body = $response.body.replace(/is_vip":\d/g,'is_vip":1')
.replace(/enddate":".*?"/g,'enddate":"9999-01-01"')
$done({ body });
