/* 魔音工坊 — 会员信息改写
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = moyin-gateway.moyin.com */

var obj = JSON.parse($response.body);

obj.data = {
   ...obj.data,
   "leftDays" : 99999,
   "isAnnualVip" : true,
   "vipTypeDesc" : "SVIP",
   "freeCount" : 99999,
   "vipRenewBannerIcon" : "https://mobvoi-growth-public.ticwear.com/image/moyingongfang/2022-10-17-8390460908237665083.png",
   "vipRenewBannerButton" : "https://mobvoi-growth-public.ticwear.com/image/moyingongfang/2022-10-25-4458810324266331367.png",
   "vipEndTime" : 4092599349000,
   "endTime" : 4092599349000,
   "vipRenewBannerBackgroundImg" : "https://mobvoi-growth-public.ticwear.com/image/moyingongfang/2022-10-17-3744562395261278965.png",
   "wordNum" : 99999,
   "totalFreeCount" : 99999,
   "type" : 1,
   "vipLeftDaysForDisplay" : 99999,
   "aiCapacity" : true,
   "superEndTime" : 4092599349000,
   "seatCount" : 99999,
   "curSeatCountLeftDays" : 99999,
   "leftDaysForDisplay" : 99999,
   "expireDays" : 4092599349000,
   "realVip" : true,
   "beginTime" : 1706494224000
};

$done({body : JSON.stringify(obj)});
