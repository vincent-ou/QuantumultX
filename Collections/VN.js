/* VN — 解锁会员 / 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = api2.vlognow.me */


var resp = JSON.parse($response.body);

    resp = {
  "msg" : "success",
  "data" : [
    {
      "origin_transaction_id" : "10086",
      "is_free_trial" : false,
      "active" : true,
      "product_identifier" : "Product_Auto_Renew_Annual_2022_05_13",
      "enanled_auto_renew" : false,
      "is_gift_subscription" : false,
      "platform" : "iOS",
      "billing_date_ms" : 1668673883000,
      "original_purchase_date_ms" : 1668673708000,
      "start_date_ms" : 1668673703000,
      "expires_date_ms" : 4092599350000,
      "status" : 1,
      "group_identifier" : "20936308"
    }
  ],
  "code" : 1
}



$done({body : JSON.stringify(resp)});
