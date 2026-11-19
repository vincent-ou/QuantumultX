/* 大神P图 — 解锁会员 / 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = *.videoshowiosglobalserver.com, *.enjoy-mobi.com */


var resp = JSON.parse($response.body);
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];
const ad = '/startPageAd/getAds';
const vipa = '/payVerify';
const vipb = '/imeiVerify';

//去除乐秀开屏
if ($request.url.indexOf(ad) != -1){
  resp = {};
}

//录屏
if (ua.indexOf('录屏') != -1) {
  vip_id = "vrecorder_vip_yearly_3";
  purchase = "2023-05-20 13:14:05 Etc/GMT";
  expires = "2099-09-09 09:09:09 Etc/GMT";
}

//大神P图
if (ua.indexOf('magicut_US') != -1) {
  vip_id = "mg_vip_year";
  purchase = "2023-05-20 13:14:05";
  expires = "2099-09-09 09:09:09";
}

//乐秀
if (ua.indexOf('VideoShow') != -1) {
  vip_id = "vip_privilege_yearly_3";
  purchase = "2023-05-20 13:14:05";
  expires = "2099-09-09 09:09:09";
}

//多功能视频剪辑
if (ua.indexOf('多功能视频剪辑') != -1) {
  vip_id = "vip_yearly_3";
  purchase = "2023-05-20 13:14:05";
  expires = "2099-09-09 09:09:09";
}

//会员信息
if ($request.url.indexOf(vipa) != -1){
  resp = {
  "expires_date" : (expires),
  "isBlacklist" : "0",
  "retCode" : "1",
  "status" : "0",
  "transaction_id" : "310001314520000",
  "retMsg" : "success",
  "isRepeatBind" : "0",
  "isUsedPromocode" : "0",
  "subscrib_type" : "2",
  "current_date" : "2023-05-20 13:14:00",
  "isReportPrice" : "0",
  "product_id" : (vip_id),
  "purchase_date" : (purchase),
  "original_transaction_id" : "310001314520000",
  "cancellation_date" : "",
  "promotional_offer_id" : "",
  "recallLabelType" : "0",
  "is_in_intro_offer_period" : "false",
  "msg" : "验证成功",
  "is_trial_period" : "true"
};}

if ($request.url.indexOf(vipb) != -1){
  resp = {
  "subscrib_type" : "2",
  "retCode" : 1,
  "current_date" : "2023-05-20 13:14:00",
  "isUpdateUuid" : 0,
  "retMsg" : "success",
  "isUsedPromocode" : 0,
  "isDiscount" : 1,
  "product_id" : (vip_id),
  "renew_status" : 0,
  "label_type" : 0,
  "list" : [
    {
      "current_date" : "2023-05-20 13:14:00",
      "original_transaction_id" : "310001314520000",
      "order_status" : 1,
      "product_id" : (vip_id),
      "purchase_date" : (purchase),
      "expires_date" : (expires)
    }
  ],
  "recallLabelType" : 0
};}

$done({body : JSON.stringify(resp)});
