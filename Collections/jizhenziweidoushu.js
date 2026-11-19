/* 吉真紫微斗数 — 会员信息改写 / 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = zwpp.wzbz123.com */

var obj = JSON.parse($response.body);

obj = {
  ...obj,
  "code" : 0,
  "data" : {
    ...obj.data,
    "expires" : "2099-09-09 09:09:09",
    "vipLevel" : 1
  },
  "isSuccess" : true
};

$done({body : JSON.stringify(obj)});
