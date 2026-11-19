/* 网速管家 — 解锁会员 / 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = api*.speedtest.cn */


var body = $response.body;
var resp = JSON.parse(body);

resp.data.integral = "999999999";
resp.data.vipExpire = "2099-09-09 09:09:09";
resp.data.isVip = 1;

body = JSON.stringify(resp);

$done({body});
