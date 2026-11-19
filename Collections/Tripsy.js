/* Tripsy — 订阅解锁
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = firstclass.tripsy.app */

let ddm = {
  "is_premium" : true,
  "expiration_intent" : 0,
  "is_trial" : true,
  "subscription" : "premium.lifetime",
  "is_renew_active" : true,
  "expiration_date" : null,
  "is_introductory_offer" : true,
  "is_in_billing_retry_period" : false
};

$done({body : JSON.stringify(ddm)});
