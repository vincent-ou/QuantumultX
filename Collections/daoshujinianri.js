/* 倒数纪念日 — 解锁会员 / 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = day-api.xixitime.com */


var resp = JSON.parse($response.body);
const user = '/user/info';
const vip = '/vip/state';

if ($request.url.indexOf(user) != -1){
resp.data["foreverVip"] = true;
resp.data["vipInfo"] = {
      "vipExpireTime" : 4092599349000,
      "trialPeriod" : true,
      "canUseTrialPeriod" : false,
      "validVip" : true,
      "foreverVip" : true,
      "vipCount" : 999999
    };
}


if ($request.url.indexOf(vip) != -1){
resp["data"] = {
    "vipExpireTime" : 4092599349000,
    "trialPeriod" : true,
    "canUseTrialPeriod" : false,
    "validVip" : true,
    "foreverVip" : true,
    "vipCount" : 999999
  };
}

$done({body : JSON.stringify(resp)});
