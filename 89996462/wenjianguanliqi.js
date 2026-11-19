/* 文件管理器 — iTunes 收据伪造（sojson 已还原）
 * 原作者：89996462
 * 适配版本：1.0.5
 * 清理整理：Muse — sojson 混淆已还原为明文，去掉作者推广与原版链接，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = buy.itunes.apple.com
 */

var body = $response.body;
var objk = JSON.parse(body);

objk = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1632865859,
    "app_item_id": 1632865859,
    "bundle_id": "com.offline.document.app",
    "application_version": "2",
    "download_id": 113062239645027,
    "version_external_identifier": 850798870,
    "receipt_creation_date": "2022-07-24 20:31:36 Etc/GMT",
    "receipt_creation_date_ms": "1658694696000",
    "receipt_creation_date_pst": "2022-07-24 13:31:36 America/Los_Angeles",
    "request_date": "2022-07-24 20:31:59 Etc/GMT",
    "request_date_ms": "1658694719624",
    "request_date_pst": "2022-07-24 13:31:59 America/Los_Angeles",
    "original_purchase_date": "2022-07-14 14:01:28 Etc/GMT",
    "original_purchase_date_ms": "1657807288000",
    "original_purchase_date_pst": "2022-07-14 07:01:28 America/Los_Angeles",
    "original_application_version": "2",
    "preorder_date": "2022-07-08 18:47:46 Etc/GMT",
    "preorder_date_ms": "1657306066000",
    "preorder_date_pst": "2022-07-08 11:47:46 America/Los_Angeles",
    "in_app": [{
      "quantity": "1",
      "product_id": "com.offline.document.app.monthly",
      "transaction_id": "730000924166880",
      "original_transaction_id": "730000924166880",
      "purchase_date": "2022-07-24 20:30:39 Etc/GMT",
      "purchase_date_ms": "1658694639000",
      "purchase_date_pst": "2022-07-24 13:30:39 America/Los_Angeles",
      "original_purchase_date": "2022-07-24 20:30:40 Etc/GMT",
      "original_purchase_date_ms": "1658694640000",
      "original_purchase_date_pst": "2022-07-24 13:30:40 America/Los_Angeles",
      "expires_date": "2099-09-09 20:30:39 Etc/GMT",
      "expires_date_ms": "4092647115000",
      "expires_date_pst": "2099-09-09 13:30:39 America/Los_Angeles",
      "web_order_line_item_id": "730000411764582",
      "is_trial_period": "false",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "com.offline.document.app.monthly",
    "transaction_id": "730000924166880",
    "original_transaction_id": "730000924166880",
    "purchase_date": "2022-07-24 20:30:39 Etc/GMT",
    "purchase_date_ms": "1658694639000",
    "purchase_date_pst": "2022-07-24 13:30:39 America/Los_Angeles",
    "original_purchase_date": "2022-07-24 20:30:40 Etc/GMT",
    "original_purchase_date_ms": "1658694640000",
    "original_purchase_date_pst": "2022-07-24 13:30:40 America/Los_Angeles",
    "expires_date": "2099-09-09 20:30:39 Etc/GMT",
    "expires_date_ms": "4092647115000",
    "expires_date_pst": "2099-09-09 13:30:39 America/Los_Angeles",
    "web_order_line_item_id": "730000411764582",
    "is_trial_period": "false",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20985028"
  }],
  "latest_receipt": "",
  "pending_renewal_info": [{
    "auto_renew_product_id": "com.offline.document.app.monthly",
    "product_id": "com.offline.document.app.monthly",
    "original_transaction_id": "730000924166880",
    "auto_renew_status": "0"
  }],
  "status": 0
}
	

body = JSON.stringify(objk);

$done({body});
