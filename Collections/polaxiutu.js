/* 泼辣修图 — 解锁会员
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 原版为 jsjiami 混淆，已在 Node 沙箱执行验证并还原为明文逻辑；去作者推广，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = api.polaxiong.com */

var obj = null;
if ($request.url.indexOf("confirmation") != -1) {
  obj = {"app": "PPE", "planType": "yearly", "planTier": "studio", "isUnlimited": true, "membershipExpiryDate": "2099-09-09T09:09:09.000Z"};
}
if ($request.url.indexOf("subscription") != -1) {
  obj = {"app": "PPE", "planId": "co.polarr.ppe.premium.studio.yearly", "isTrial": false, "isUnlimited": true, "membershipExpiryDate": "2099-09-09T09:09:09.000Z", "planTier": "studio", "startDate": "2026-09-09T09:09:09.000Z", "expiryDate": "2099-09-09T09:09:09.000Z", "isSubscribed": true, "planType": "yearly", "subscriptionProduct": "yearly", "subscriptionTier": "studio", "paymentChannel": "AppleIapSubscription"};
}
var isQX = typeof $task !== "undefined";
$done({"status": isQX ? "HTTP/1.1 200 OK" : 200, "headers": $response.headers || {}, "body": JSON.stringify(obj)});
