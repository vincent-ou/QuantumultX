/* 小影 — 会员解锁
 * 原作者：WeiGiegie
 * 适配版本：9.14.6
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api-chn.rthdo.com
 */
var body = $response.body;
let obj = JSON.parse($response.body);
obj = {
  "autoRenewProductId": "premium_platinum_yearly",
  "autoRenewStatus": 1,
  "allEndTime": 32493834549000,
  "iosDeviceProductVo": {
    "newVipMonthly": 30,
    "premiumVipWeekly": 30,
    "premiumPlatinumQuarterly": 30,
    "premiumGoldMonthly": 30,
    "premiumPlatinumMonthly": 30,
    "newVipYearly": 30,
    "premiumVipYearly": 30,
    "newVipWeekly": 30,
    "nonOrganicVipMonthly": 30,
    "premiumPlatinumHalfYearly": 30,
    "nonOrganicVipWeekly": 30,
    "premiumGoldYearly": 30,
    "nonOrganicVipYearly": 30,
    "premiumPlatinumYearly": 2
  },
  "allVipType": "vip_normal",
  "allStartTime": 1708574721000,
  "endTime": 32493834549000,
  "platform": 2,
  "isTrialPeriod": false,
  "productList": [{
    "isRenew": true,
    "vipType": "premium_platinum_yearly"
  }],
  "systemDate": 1708574771641,
  "startTime": 1708574721000,
  "vipType": "premium_platinum_yearly",
  "sign": "2903a65d0bed5294153c6e986e000000"
};
$done({
  body: JSON.stringify(obj)
});