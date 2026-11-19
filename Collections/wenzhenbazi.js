/* 问真八字 — 会员信息改写
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = bzpp3.iwzbz.com */

var ddm = JSON.parse($response.body);

ddm.data.expires = "2099-09-09 09:09:09";
ddm.data.vipLevel = 3;
ddm.isSuccess = true;

$done({ body: JSON.stringify(ddm) });
