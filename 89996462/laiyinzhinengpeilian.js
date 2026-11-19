/* 来音智能陪练 — VIP 解锁
 * 原作者：89996462
 * 适配版本：3.4.2
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑；身份字段改取真实返回（原版写入作者身份/推广），逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = (partner-ai-api.quthing.com|partner-ai-api.quthing.com)
 */

var body = $response.body;
var url = $request.url;

if (url.indexOf("/ai/vip/state") != -1) {
  body = JSON.stringify({
  "data" : {
    "dayCardBalance" : 0,
    "nextAutoRenewTime" : 0,
    "serverTime" : 1696914284937,
    "goodsId" : 53,
    "seniorVip" : false,
    "showText" : "2114.10.02到期",
    "validVip" : true,
    "expireTime" : 4677560840113,
    "vipCount" : 186391,
    "autoRenew" : false,
    "lastBuySkuName" : "partnertrainingai_one_year_vip"
  }
}
);
}

if (url.indexOf("/student/info/h5") != -1) {
  var info = JSON.parse(body);
  info.data = info.data || {};
  // 只改 VIP 信息，学号/手机号/姓名/头像等身份字段保留真实返回。
  info.data.vipInfo = {"validVip":true,"seniorVip":true,"expireTime":4567891456000,"goodsId":53,"vipCount":186390,"serverTime":1696913719272,"autoRenew":false,"showText":"2114.10.02到期","lastBuySkuName":"partnertrainingai_one_year_vip","nextAutoRenewTime":0,"dayCardBalance":0};
  body = JSON.stringify(info);
}

$done({ body });
