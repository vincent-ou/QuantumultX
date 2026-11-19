/* Notability — VIP 解锁
 * 原作者：89996462
 * 适配版本：14.0.2
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = notability.com
 */

var ojbk = JSON.parse($response.body);

ojbk = {   "data" : {     "processAppleReceipt" : {       "error" : 0,       "subscription" : {         "productId" : "com.gingerlabs.Notability.premium_subscription",         "originalTransactionId" : "570001184068302",         "tier" : "premium",         "refundedDate" : null,         "refundedReason" : null,         "isInBillingRetryPeriod" : false,         "expirationDate" : "2099-09-09T09:09:09.000Z",         "gracePeriodExpiresAt" : null,         "overDeviceLimit" : false,         "expirationIntent" : "CUSTOMER_CANCELLED",         "__typename" : "AppStoreSubscription",         "user" : null,         "status" : "canceled",         "originalPurchaseDate" : "2022-09-09T09:09:09.000Z"       },       "__typename" : "SubscriptionResult"     }   } };

$done({body : JSON.stringify(ojbk)});
