/* 电子合同易签约 — 会员信息改写 / 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = iosdzhtyqy.sanwubeixin.cn */

var obj = JSON.parse($response.body);

obj.data = {
  ...obj.data,
  "money" : 999999,
  "isVip" : true,
  "vip_money" : 999999,
  "vip_type" : 1,
  "vip_time" : 4092599349
};

$done({body : JSON.stringify(obj)});
