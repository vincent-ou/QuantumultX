/* lectmate — 有道留学听课宝
 * 原作者：WeiGiegie
 * 适配版本：2.8.0
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = intervip.youdao.com
 */
var body = $response.body;
let obj = JSON.parse($response.body);
obj.data = {
  "status": "VERIFY_SUCCESS",
  "business": "VIP",
  "priceActualUsd": 0,
  "currentDate": 1728866701971,
  "originalPurchaseDate": 1728866699000,
  "productId": "0_year_all_49.99_240115_6000_lp",
  "outTradeNo": "",
  "introOfferStatus": "STATUS_ON",
  "quantity": 1,
  "trial": false,
  "environment": "production",
  "requestCountry": "--",
  "product": "classtranslate",
  "valid": true,
  "subscriptionStatus": "ENABLED",
  "autoRenewStatus": "STATUS_ON",
  "localCode": "CN",
  "expireDate": 4102372800000,
  "createDate": 1728866701971,
  "statusCode": 0,
  "purchaseDate": 4102372800000
};
$done({
  body: JSON.stringify(obj)
});