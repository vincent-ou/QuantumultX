/* 小熊录屏 — VIP 解锁
 * 原作者：89996462
 * 适配版本：1.7.6
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = donate-api.recorder.duapps.com
 */

var body = $response.body.replace(/"expiresDateMs":\d+/g,'"expiresDateMs":3670811527000')
$done({ body });
