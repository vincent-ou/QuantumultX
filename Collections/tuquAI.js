/* 图趣AI — 会员信息改写
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = meitu.minecaller.com */

var obj = JSON.parse($response.body);

obj = {
  ...obj,
  "chargePoint" : 999,
  "diamonds" : 9999,
  "vipPoint" : 9999,
  "vipOpeningDate" : "2024-04-01",
  "freeCount" : 9999,
  "trialed" : true,
  "vip" : true,
  "vipExpireDate" : "2099-09-09",
  "raffleCount" : 99
};

$done({body : JSON.stringify(obj)});
