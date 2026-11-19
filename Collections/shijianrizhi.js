/* 时间日志 — 会员信息改写
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = liujia95.xyz */

var obj = JSON.parse($response.body);

obj.body.vipType = 4;

$done({body : JSON.stringify(obj)});
