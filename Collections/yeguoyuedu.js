/* 野果阅读 — 解锁会员
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = yeguo.236api.com */


var body = $response.body;

body = body.replace(/\"total_ticket":\d+/g, '\"total_ticket":999999');

body = body.replace(/\"read_time":"\d+"/g, '\"read_time":"4092599350000"');

body = body.replace(/\"key":".*?"/g, '\"key":"level_6"');

body = body.replace(/\"vip_end_date":\d+/g, '\"vip_end_date":"2099-09-09 09:09:09"');

$done({body});
