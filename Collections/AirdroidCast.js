/* Airdroid Cast — 会员信息改写
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = *.airdroid.cn */

var obj = JSON.parse($response.body);
const vip = /cast\/getUserPaymentInfo/;
const user = /user\/getuserinfo/;

if(vip.test($request.url)){
  obj.data = {
    ...obj.data,
    "next_order_level": 2,
    "has_pay": 1,
    "subscription_fee_mode_id": 400081,
    "subscription_payment_method_desc": "Apple",
    "feature_type": 1,
    "subscription_start": "2023-09-09",
    "end_date": "2099-09-09",
    "subscription_next_payment": "2099-09-09",
    "name" : "AirDroid Cast Svip 1 Year",
    "end_date_ms": 4092599349000,
    "subscription_is_bundle": true,
    "is_subscription": 1,
    "user_type": 2,
    "order_level": 3,
    "apple_iap_product_id": "com.sandstudio.cp_castsource.vip_yearly",
    "subscription_payment_method": "Apple",
    "isPremium": 1,
    "cast_feature_type": 1,
    "vip": 1,
    "subscription_month": 12,
    "is_bundle": true,
    "is_recurring": 1,
    "level": 3
  };
}

if(user.test($request.url)){
  obj.data = {
    ...obj.data,
    "vip" : 1,
    "isPremium" : 1,
    "vip_starttime" : "2023-09-09 09:09:09",
    "cast_feature_type" : 1,
    "vip_endtime" : 4092599349000
  };
}

$done({body : JSON.stringify(obj)});
