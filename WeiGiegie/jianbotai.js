/* 剪播台 — 剪播台
 * 原作者：WeiGiegie
 * 适配版本：1.3.0
 * 清理整理：Muse — 去除作者推广与注释头，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api-chn.jianbotaiapi.com
 */

var body = $response.body; 
let obj = JSON.parse($response.body);
obj={"code":200,"data":{"hasIntroOfferProds":[],"list":[{"autoRenewProductId":"79_premium_normal_monthly","orderId":"710001565290000","isTrialPeriod":true,"endTime":32493834549000,"productId":"79_premium_normal_monthly","productType":3,"startTime":1708868099000,"orderStatus":1,"autoRenewStatus":true,"originalOrderId":"710001565290000","sign":"49c2e89eda8cd1d1b15d09260b71c323"}],"hasFreedTrialProds":["79_premium_normal_monthly"],"systemDate":1708868118563,"hasPurchasedProds":["79_premium_normal_monthly"]},"message":"successful","success":true}
$done({body: JSON.stringify(obj)});
