/* 亲戚计算器 — 会员信息改写 / 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = chenghu */

var ddm = JSON.parse($response.body);

ddm.data = {
  ...ddm.data,
  "subscribe_expires_date" : "2099-09-09 09:09:09",
  "vip_type" : 2,
  "purchase_date" : 1738139336,
  "is_vip" : 1
};

$done({body : JSON.stringify(ddm)});
