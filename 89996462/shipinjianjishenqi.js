/* 视频剪辑神器 — 解锁订阅
 * 原作者：89996462
 * 适配版本：2.9.19
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = buy.videoshowiosglobalserver.com
 */

var objc = JSON.parse($response.body);

    objc = 
{"msg":"验证成功","isRepeatBind":"0","original_transaction_id":"430001586362022","is_in_intro_offer_period":"true","isReportPrice":"0","webOrderLineItemId":"430000759298137","is_trial_period":"true","retCode":"1","transactionReason":"PURCHASE","grace_period_expires_date":"","subscrib_type":"1","offerType":"1","isUsedPromocode":"0","product_id":"vip_monthly_3","offerIdentifier":"","recallLabelType":"0","transaction_id":"430001586362022","isBlacklist":"0","quantity":"1","expires_date":"9999-10-19 08:43:24","promotional_offer_id":"","retMsg":"success","cancellation_date":"","subscriptionGroupIdentifier":"20520759","current_date":"2023-10-16 08:44:05","appAccountToken":"","purchase_date":"2023-10-16 08:43:24","storefront":"CHN","status":"0"}


$done({body : JSON.stringify(objc)});
