/* 甜盐相机 — VIP 解锁
 * 原作者：89996462
 * 适配版本：7.1.9
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = purchase-tianyan-api.tianyancam.com
 */

var objc = JSON.parse($response.body);

    objc = {"result":{"activated":true,"products":[{"productId":"com.yiruike.sodacn.subscribe.oneyear","startDate":1673549875000,"expireDate":4674154670000,"managed":false,"status":"ACTIVE"}]}}
$done({body : JSON.stringify(objc)});
