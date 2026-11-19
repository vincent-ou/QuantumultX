/* 全民幸福社 — VIP 解锁
 * 原作者：89996462
 * 适配版本：5.4.1
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.qmxfs.com
 */

var body = $response.body.replace(/isDowload":\d/g,'isDowload":1')
.replace(/isWatchable":\d+/g,'isWatchable":1')
.replace(/isBuy":\d/g,'isBuy":1')
$done({ body });
