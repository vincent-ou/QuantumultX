/* Filmix — 会员信息改写
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = raw.githubu */

var obj = JSON.parse($response.body);

obj.is_vip = true;
obj.vip_start_time = "2023-09-09T09:09:09+09:00";
obj.vip_end_time = "2099-09-09T09:09:09+09:00";

$done({body : JSON.stringify(obj)});
