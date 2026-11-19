/* SODA相机 — VIP 解锁
 * 原作者：89996462
 * 适配版本：1.9.1
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = yueh.app168.cc
 */

var body = JSON.parse($response.body);

body.vip_date = 4102366850,

$done({ body: JSON.stringify(body) });
