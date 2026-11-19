/* 妙看 — VIP 解锁
 * 原作者：89996462
 * 适配版本：1.6.3
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.tai1000.com
 */

var body = $response.body.replace(/isVip": \w+/g,'isVip": true')
.replace(/VipTime": ".*?"/g,'VipTime": "365"')
.replace(/unlockCount": \d+/g,'unlockCount": 999999')
.replace(/preloadAdType": \d+/g,'preloadAdType": 0')
.replace(/showAd": \w+/g,'showAd": false')
$done({ body });
