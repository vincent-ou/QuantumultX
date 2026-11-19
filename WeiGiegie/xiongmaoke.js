/* 熊猫客 — 全球自然探索指南
 * 原作者：WeiGiegie
 * 适配版本：1.9.11
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = shopapi.pandatrek.cn
 */
var obj = JSON.parse($response.body);
obj.data = {
  "membership": {
    "id": "1994399144633991169",
    "levelName": null,
    "jsonObj": null,
    "rightsJson": "{\"canViewPaidContent\":true,\"canUseAudioPlayback\":true,\"travelInfoViewPermission\":true,\"tripInfoViewPermission\":true}",
    "type": "ios",
    "levelId": "3",
    "subscriptionType": "membership",
    "endTime": "2099-12-05 21:33:00",
    "transactionId": "490002483881907",
    "membershipTypeName": "连续包月",
    "orderId": "1994399086660288512",
    "refundTime": null,
    "startTime": "2025-11-28 21:33:00",
    "status": "active",
    "isAutoRenew": true
  }
};
$done({
  body: JSON.stringify(obj)
});