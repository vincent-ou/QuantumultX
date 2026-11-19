/* 吉真万年历 — 会员信息改写 / 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = calendarsrv.iwzwh.com */

var ddm = JSON.parse($response.body);

ddm.data = {
  "expires" : "2099-09-09 09:09:09",
  "vipLevel" : 1
};

$done({body : JSON.stringify(ddm)});
