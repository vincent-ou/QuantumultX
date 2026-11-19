/* Noted — 会员解锁（永久会员）
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = *-api.notedapp.io */

const timestamp = Date.now();
let ddm;
//旧版
if(/verifyReceipt/.test($request.url)){
  ddm = {
    "status" : 0,
    "receipt" : {
      "receipt_type" : "Production",
      "app_item_id" : 1149425482,
      "receipt_creation_date" : "2023-09-09 16:06:26 Etc/GMT",
      "bundle_id" : "com.digitalworkroom.noted",
      "original_purchase_date" : "2023-09-09 16:00:00 Etc/GMT",
      "in_app" : [
        {
          "quantity" : "1",
          "purchase_date_ms" : "1694250549000",
          "transaction_id" : "490001314520000",
          "is_trial_period" : "false",
          "original_transaction_id" : "490001314520000",
          "purchase_date" : "2023-09-09 09:09:09 Etc/GMT",
          "product_id" : "com.digitalworkroom.noted.plus.lifetime",
          "original_purchase_date_pst" : "2023-09-09 02:09:10 America/Los_Angeles",
          "in_app_ownership_type" : "PURCHASED",
          "original_purchase_date_ms" : "1694250550000",
          "purchase_date_pst" : "2023-09-09 02:09:09 America/Los_Angeles",
          "original_purchase_date" : "2023-09-09 09:09:10 Etc/GMT"
        }
      ],
      "adam_id" : 1149425482,
      "receipt_creation_date_pst" : "2023-09-09 06:06:26 America/Los_Angeles",
      "request_date" : "2023-09-09 16:06:27 Etc/GMT",
      "request_date_pst" : "2023-09-09 06:06:27 America/Los_Angeles",
      "version_external_identifier" : 860342049,
      "request_date_ms" : "1694273635000",
      "original_purchase_date_pst" : "2023-09-09 06:00:00 America/Los_Angeles",
      "application_version" : "742",
      "original_purchase_date_ms" : "1694273430000",
      "receipt_creation_date_ms" : "1694273634000",
      "original_application_version" : "742",
      "download_id" : 502843213225537600
    },
    "latest_receipt_info" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1694250549000",
        "transaction_id" : "490001314520000",
        "is_trial_period" : "false",
        "original_transaction_id" : "490001314520000",
        "purchase_date" : "2023-09-09 09:09:09 Etc/GMT",
        "product_id" : "com.digitalworkroom.noted.plus.lifetime",
        "original_purchase_date_pst" : "2023-09-09 02:09:10 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1694250550000",
        "purchase_date_pst" : "2023-09-09 02:09:09 America/Los_Angeles",
        "original_purchase_date" : "2023-09-09 09:09:10 Etc/GMT"
      }
    ],
    "environment" : "Production",
    "pending_renewal_info" : [
      {
        "product_id" : "com.digitalworkroom.noted.plus.lifetime",
        "original_transaction_id" : "490001314520000",
        "auto_renew_product_id" : "com.digitalworkroom.noted.plus.lifetime",
        "auto_renew_status" : "1"
      }
    ],
    "warning" : "仅供学习，禁止转载或售卖",
  };
}
//新版
if(/purchases/.test($request.url)){
  ddm = {
    "originalTransactionId": "490001314520000",
    "status": 1,
    "subscriptionPlanStatus": "active",
    "renewalInfo": {
      "autoRenewProductId": "com.digitalworkroom.noted.plus.lifetime",
      "appTransactionId": "704405923382244724",
      "originalTransactionId": "490001314520000",
      "productId": "com.digitalworkroom.noted.plus.lifetime",
      "renewalDate": null,
      "expirationIntent": null,
      "signedDate": timestamp,
      "environment": "Production",
      "recentSubscriptionStartDate": 1725844149000,
      "autoRenewStatus": 0,
      "isInBillingRetryPeriod": false
    },
    "valid": true,
    "transactionInfo": {
      "originalTransactionId": "490001314520000",
      "subscriptionGroupIdentifier": "20421642",
      "signedDate": timestamp,
      "offerPeriod": null,
      "expiresDateFormatted": null,
      "bundleId": "com.digitalworkroom.noted",
      "offerDiscountType": null,
      "currency": "CNY",
      "expiresDate": null,
      "originalPurchaseDate": 1725844149000,
      "productId": "com.digitalworkroom.noted.plus.lifetime",
      "transactionId": "490001314520000",
      "storefront": "CHN",
      "type": "Non-Consumable",
      "storefrontId": "143465",
      "webOrderLineItemId": "490000123456789",
      "quantity": 1,
      "appTransactionId": "704405923382244724",
      "transactionReason": "PURCHASE",
      "inAppOwnershipType": "PURCHASED",
      "purchaseDate": 1725844149000,
      "environment": "Production",
      "offerType": 1,
      "price": 0
    }
  };
}


$done({body : JSON.stringify(ddm)});
