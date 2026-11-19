/* 魔图 — 解锁订阅
 * 原作者：89996462
 * 适配版本：4.0.2
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = pay-motu.doglobal.net
 */

var objc = JSON.parse($response.body);
    objc = {"result":{"id":8120123,"appId":21,"itemId":"PhotoWonderPro_Subscription_1month","price":29.37,"currencyCode":"CNY","countryCode":"CN","quantity":1,"transactionId":"430001588139187","originalTransId":"430001588139187","purchaseTime": 4095982975000,"original_purchase_date_ms":1697605185000,"cancellationDateMs":0,"expireTime": 4095982975000,"isTrialPeriod":true,"webOrderLineItemId":"430000760207097"},"message":{"code":200,"messageInfo":"ok","serverTime":1697605304371}}
$done({body : JSON.stringify(objc)});
