/* 挖财记账 — 解锁会员 / 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = jz.wacaijizhang.com */


var resp = JSON.parse($response.body);
const my = /api\/my\/v\d/;
const vip = /(vipmember\/v\d\/index|jz-activity\/bkk-frontier\/api\/vipmember\/v\d\/index)/;
const user = /usercenter\/userInfo/;

if(my.test($request.url)){
  resp.data.vipInfo = {
    "vipMemberType" : "挖财记账超级年会员",
    "isVipMember" : true,
    "expirationDate" : 4092599349000,
    "continuous" : true,
    "remainingDays" : 99999,
    "consecutiveDays" : 99999
  };
}

if(vip.test($request.url)){
  resp.data.vipInfo = {
    ...resp.data.vipInfo,
    "adFreeVipEnable" : 1,
    "adFreePermanentVip" : true,
    "vipMemberEnable" : 1,
    "continuousEnable" : 1,
    "continuousType" : 1,
    "expirationDate" : 4092599349000,
    "superExpireDate" : 4092599349000,
    "adFreeExpireDate" : 4092599349000,
    "isPermanentVip" : true,
    "freeSendAdFreeVipEnable" : 0,
    "vipType" : 2,
    "expireDaysDays" : 99999,
    "freeSendVipEnable" : 0
  };
}

if(user.test($request.url)){
  resp.data.isVip = 1;
}

$done({body : JSON.stringify(resp)});
