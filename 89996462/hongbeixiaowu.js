/* 烘焙小屋 — VIP 解锁
 * 原作者：89996462
 * 适配版本：3.9.5
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = apiios_dq.xiangha.com
 */

var body = $response.body.replace(/"is_vip":1/g,'"is_vip":2')
.replace(/"is_open_vip":0/g,'"is_open_vip":1')
.replace(/"isShow":"1"/g,'"isShow":"2"')
$done({ body });
