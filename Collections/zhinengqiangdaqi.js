/* 智能抢答器 — 会员信息改写 / 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = qdq.9sm.net */

var ddm = JSON.parse($response.body);

ddm.data.expiredTime = "2099-09-09 09:09:09";
ddm.data.vipType = 1;

$done({body : JSON.stringify(ddm)});
