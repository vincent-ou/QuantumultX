/* touchretouch — 消除笔及p图修图软件-神奇橡皮擦
 * 原作者：WeiGiegie
 * 适配版本：5.2.4
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.revenuecat.com
 */
var body = $response["body"];
let obj = JSON["parse"]($response["body"]);
obj = {
  "request_date_ms": 0x1900ff96fca,
  "request_date": "2024-06-13T05:02:03Z",
  "subscriber": {
    "non_subscriptions": {},
    "first_seen": "2024-06-13T04:58:13Z",
    "original_application_version": "1089",
    "other_purchases": {},
    "management_url": "https://apps.apple.com/account/subscriptions",
    "subscriptions": {
      "tr5_yearlysubsc_20dlrs_1": {
        "original_purchase_date": "2024-06-13T05:01:41Z",
        "expires_date": "2999-09-09T05:01:39Z",
        "is_sandbox": ![],
        "refunded_at": null,
        "store_transaction_id": "710001672316566",
        "unsubscribe_detected_at": null,
        "grace_period_expires_date": null,
        "period_type": "trial",
        "purchase_date": "2024-06-13T05:01:39Z",
        "billing_issues_detected_at": null,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "auto_resume_date": null
      }
    },
    "entitlements": {
      "premium": {
        "grace_period_expires_date": null,
        "purchase_date": "2024-06-13T05:01:39Z",
        "product_identifier": "tr5_yearlysubsc_20dlrs_1",
        "expires_date": "2999-09-09T05:01:39Z"
      }
    },
    "original_purchase_date": "2024-06-13T04:54:09Z",
    "original_app_user_id": "$RCAnonymousID:d485028cfbc846ea8ae5077c8209a73a",
    "last_seen": "2024-06-13T04:58:13Z"
  }
};
$done({
  "body": JSON["stringify"](obj)
});