/* 节奏酱 — 节奏酱
 * 原作者：WeiGiegie
 * 适配版本：4.50.2
 * 清理整理：Muse — 去除作者推广与注释头，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = medi.dxzzywxk.top
 */

var body = $response.body; 
let obj = JSON.parse($response.body);
obj={"code":200,"data":{"hasIntroOfferProds":[],"list":[{"autoRenewProductId":"All_Tempo_Access_Yearly_sub","orderId":"710001564254100","isTrialPeriod":true,"endTime":32493834549000,"productId":"All_Tempo_Access_Yearly_sub","productType":3,"startTime":1708781569000,"orderStatus":1,"autoRenewStatus":true,"originalOrderId":"710001564254100","sign":"67dedd097d67880a0d32573a19c09f76"}],"hasFreedTrialProds":["All_Tempo_Access_Yearly_sub"],"systemDate":1708781597159,"hasPurchasedProds":["All_Tempo_Access_Yearly_sub"]},"message":"successful","success":true}
$done({body: JSON.stringify(obj)});
