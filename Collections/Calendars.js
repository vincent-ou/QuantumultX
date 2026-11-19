/* Calendars — 解锁订阅
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = license.pdfexpert.com */

var obj = JSON.parse($response.body);

obj = {
  "originalTransactionId" : 490001314520000,
  "inAppStates" : [
    {
      "originalTransactionId" : 490001314520000,
      "productId" : "com.readdle.CalendarsLite.subscription.year20trial7",
      "subscriptionState" : "trial",
      "productName" : "subscription",
      "subscriptionExpirationDate" : "09:09 09/09/2099",
      "isEligibleForIntroPeriod" : false,
      "subscriptionAutoRenewStatus" : "autoRenewOff",
      "type" : "subscription",
      "isInGracePeriod" : false,
      "isInBillingRetryPeriod" : false,
      "entitlements" : [
"ios.pe.subscription.CalendarsLite"
      ]
    }
  ],
  "chargingPlatform" : "iOS AppStore",
  "receiptStatus" : "ok",
  "bundleId" : "com.readdle.CalendarsLite",
  "receiptId" : 1671234567890,
  "statisticsInfo" : {
    "events" : [

    ]
  },
  "externalId" : "2f1fa60b-19a4-4d6e-9a1c-4d09569979c5"
};

$done({body : JSON.stringify(obj)});
