/* 漫读 — 会员信息改写
 * 原作者：ddm1026
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = enjoy_reading_pro */

var ddm = JSON.parse($response.body);ddm.data = true;$done({body : JSON.stringify(ddm)});
