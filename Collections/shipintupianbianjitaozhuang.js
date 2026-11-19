/* 视频图片编辑套装 — 订阅解锁 / 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = *.vlognow.me */

var obj = JSON.parse($response.body);

obj = {
  "msg" : "success",
  "data" : [
    {
      "status" : 1,
      "is_free_trial" : false,
      "active" : true,
      "product_identifier" : "Product_Auto_Renew_Annual_2022_05_13",
      "enanled_auto_renew" : true,
      "is_gift_subscription" : false,
      "platform" : "iOS",
      "billing_date_ms" : 1725844149000,
      "original_purchase_date_ms" : 1725844149000,
      "start_date_ms" : 1725844149000,
      "expires_date_ms" : 4092599349000,
      "group_identifier" : "20936308",
      "origin_transaction_id" : "490001234567890"
    }
  ],
  "code" : 1
};

$done({body : JSON.stringify(obj)});
