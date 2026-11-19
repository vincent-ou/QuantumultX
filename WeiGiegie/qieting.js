/* 且听 — 会员解锁
 * 原作者：WeiGiegie
 * 适配版本：1.0.85
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = *.erduoshuku.cn
 */
let obj = JSON.parse($response.body);
const url = $request.url;
if (url.includes("free-membership/usage")) {
  obj.data = {
    "totalFreeDays": null,
    "usedDays": null
  };
}
if (url.includes("subscription/expiry-popup")) {
  if (obj.data) {
    obj.data.shouldPopup = false;
  }
}
if (url.includes("subscription/info")) {
  obj.data = {
    "subscriptionList": [{
      "productId": null,
      "autoRenewStatus": null,
      "subscriptionEndDate": "4133865599000",
      "canSubscribe": false,
      "nextDeductTime": null,
      "canCancelSubscribe": false,
      "memberStatus": "ACTIVE",
      "paymentChannel": "",
      "periodType": null,
      "periodUnits": null,
      "canResubscribe": false,
      "lastTransactionId": null,
      "subscriptionStatus": "ACTIVE"
    }]
  };
}
if (url.includes("account/user-profile")) {
  if (obj.data) {
    obj.data.nickname = "尊贵SVIP用户";
    obj.data.isVip = true;
    obj.data.vipStatus = "ACTIVE";
    obj.data.status = 1;
    obj.data.vipLevel = 1;
  }
}
$done({
  body: JSON.stringify(obj)
});