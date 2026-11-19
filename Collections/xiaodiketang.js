/* 小滴课堂 — 会员信息改写 / 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = api-v2.xdclass.net */

var obj = JSON.parse($response.body);

obj.data = {
  ...obj.data,
  "vipExpired" : "2099-09-09 09:09:09",
  "vipRank" : 1,
  "identityType" : "永久会员",
  "role" : "FOREVER_VIP"
};

$done({body : JSON.stringify(obj)});
