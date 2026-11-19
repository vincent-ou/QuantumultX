/* 配音 — 解锁会员
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = *.dicallapp.com */


body = $response.body.replace(/\"TFlag":\d+/g, '\"TFlag":1').replace(/\"UFlag":\d+/g, '\"UFlag":1').replace(/\"UserVipEnd":"(.*?)"/g, '\"UserVipEnd":"2099-09-09 09:09:09"')

$done({body});
