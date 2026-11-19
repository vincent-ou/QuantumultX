/* 番薯小说阅读器 — VIP 解锁
 * 原作者：89996462
 * 适配版本：2.5.71
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = g20.manmeng168.com
 */

var body = $response.body.replace(/vip":\w+/g,'vip":true')
.replace(/vip_start_time":\d+/g,'vip_start_time":4092599349000')
.replace(/vip_end_time":\d+/g,'vip_end_time":4092599349000')
$done({ body });
