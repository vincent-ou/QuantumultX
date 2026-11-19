/* 千本笔记 — iTunes 收据伪造
 * 原作者：89996462
 * 适配版本：1.30.0
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = buy.itunes.apple.com
 */

var anni = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "receipt_creation_date": "2023-08-12 09:09:09 Etc\/GMT",
    "bundle_id": "com.topstack.iphone.Kilonotes",
    "original_purchase_date": "2023-08-12 09:09:09 Etc\/GMT",
    "in_app": [
      {
        "quantity": "1",
        "purchase_date_ms": "1691802549000",
        "expires_date": "2099-12-31 09:09:09 Etc\/GMT",
        "expires_date_pst": "2099-12-31 09:09:09 America\/Los_Angeles",
        "is_in_intro_offer_period": "false",
        "transaction_id": "99999999999999",
        "is_trial_period": "false",
        "original_transaction_id": "99999999999999",
        "purchase_date": "2023-08-12 09:09:09 Etc\/GMT",
        "product_id": "kipa_kilonotes_quarter_subscription",
        "original_purchase_date_pst": "2023-08-12 09:09:09 America\/Los_Angeles",
        "in_app_ownership_type": "PURCHASED",
        "original_purchase_date_ms": "1691802549000",
        "web_order_line_item_id": "99999999999999",
        "expires_date_ms": "4102362549000",
        "purchase_date_pst": "2023-08-12 09:09:09 America\/Los_Angeles",
        "original_purchase_date": "2023-08-12 09:09:09 Etc\/GMT"
      }
    ],
    "receipt_creation_date_pst": "2023-08-12 09:09:09 America\/Los_Angeles",
    "request_date": "2023-08-12 09:09:09 Etc\/GMT",
    "request_date_pst": "2023-08-12 09:09:09 America\/Los_Angeles",
    "request_date_ms": "1691802549000",
    "original_purchase_date_pst": "2023-08-12 09:09:09 America\/Los_Angeles",
    "application_version": "110",
    "original_purchase_date_ms": "1691802549000",
    "receipt_creation_date_ms": "1691802549000",
    "original_application_version": "123",
  },
  "pending_renewal_info": [
    {
      "product_id": "kipa_kilonotes_quarter_subscription",
      "original_transaction_id": "99999999999999",
      "auto_renew_product_id": "kipa_kilonotes_quarter_subscription",
      "auto_renew_status": "1"
    }
  ],
  "status": 0,
  "latest_receipt_info": [
    {
      "quantity": "1",
      "purchase_date_ms": "1691802549000",
      "expires_date": "2099-12-31 09:09:09 Etc\/GMT",
      "expires_date_pst": "2099-12-31 09:09:09 America\/Los_Angeles",
      "is_in_intro_offer_period": "false",
      "transaction_id": "99999999999999",
      "is_trial_period": "false",
      "original_transaction_id": "99999999999999",
      "purchase_date": "2023-08-12 09:09:09 Etc\/GMT",
      "product_id": "kipa_kilonotes_quarter_subscription",
      "original_purchase_date_pst": "2023-08-12 09:09:09 America\/Los_Angeles",
      "in_app_ownership_type": "PURCHASED",
      "subscription_group_identifier": "66666666",
      "original_purchase_date_ms": "1691802549000",
      "web_order_line_item_id": "99999999999999",
      "expires_date_ms": "4102362549000",
      "purchase_date_pst": "2023-08-12 09:09:09 America\/Los_Angeles",
      "original_purchase_date": "2023-08-12 09:09:09 Etc\/GMT"
    }
  ]
};

$done({ body: JSON.stringify(anni) });
