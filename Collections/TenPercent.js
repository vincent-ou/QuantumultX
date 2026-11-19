/* TenPercent — 解锁会员 / 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = api.changecollective.com */

var obj = JSON.parse($response.body);

obj.user = {
    ...obj.user,
    "subscription_period" : "P1Y",
    "created_at" : "2023-09-09T09:09:09Z",
    "expiration_date" : "09/09/2099, 09:09:00 PM UTC",
    "admin" : true,
    "apple_subscription_discount" : null,
    "subscription_in_trial" : true,
    "plan_description" : "1 year (Trial)",
    "completed_trial" : true,
    "subscription_end_date" : "09/09/2099, 09:09:00 PM UTC",
    "subscription_is_auto_renewing" : true,
    "purchaser" : true,
    "subscription_source" : "Apple",
    "app_onboarding_completed_date" : "09/09/2023"
  };

$done({body : JSON.stringify(obj)});