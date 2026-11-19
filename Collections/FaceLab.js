/* FaceLab — 订阅解锁 / 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = subscription-api.lyrebirdstudio.net */

var obj = JSON.parse($response.body);

obj = {
  "data" : {
    "app_id" : "com.lyrebirdstudio.facelab",
    "quantity" : 1,
    "start_date" : 1708187889000,
    "end_date" : 4092599349000,
    "created_at" : 1708187892597,
    "user_id" : "A59BD623FE0349588C87C655BAA880B1",
    "type" : "Auto-Renewable Subscription",
    "main_status_code" : 3.1000000000000001,
    "mmp_id" : "1707723056548-8345046",
    "sub_status_name" : "TRIAL",
    "app_platform" : "IOS",
    "product_id" : "com.lyrebirdstudio.facelab.iap.subscription.weekly7a",
    "invoice_token" : "490001637717255",
    "updated_at" : 1708187892597,
    "status_name" : "ACTIVE_AUTO_REN_ON",
    "ownership_type" : "PURCHASED",
    "country" : "HK"
  }
};

$done({body : JSON.stringify(obj)});
