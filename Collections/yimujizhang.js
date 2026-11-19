/* 一木记账 — 永久会员，会员到期 2099-09-09，vipType 2 = 永久会员
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广与原版链接，逻辑与数值与本地验证版一致 / [rewrite_local] / [mitm] hostname = yimuapp.com */

var obj = JSON.parse($response.body);
if (!obj.result) obj.result = {};

obj.result.vipTime = 4092599349000;  // 会员到期时间：2099-09-09
obj.result.vipType = 2;             // 永久会员

$done({ body: JSON.stringify(obj) });

