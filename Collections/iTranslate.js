/* iTranslate — 解锁会员 / 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = ssl-api.itranslateapp.com */


var resp = JSON.parse($response.body);
const vip = '/subscriptions/verify';
const active = '/marketing/consent/status';

if ($request.url.indexOf(vip) != -1){
  resp.licenses = [
    {
      "product_id" : "com.itranslate.pro.yearly",
      "bundle_id" : "com.outerspaceapps.itranslate",
      "is_trial_period" : true,
      "original_transaction_id" : "160001314520000",
      "expires_date_ms" : 4092599350000,
      "transaction_id" : "160001314520000"
    }
  ];
}

if ($request.url.indexOf(active) != -1){
  resp ={
  "is_active" : true
  };
}

$done({body : JSON.stringify(resp)});
