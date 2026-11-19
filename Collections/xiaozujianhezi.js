/* 小组件盒子 — 解锁会员
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = widget-box-api.codefuture.top */


var body = $response.body;
var resp = JSON.parse(body);

resp.inviteCodeAmountLeft = 5;
resp.isVip = true;
resp.vipExpiredAt = "0";

body = JSON.stringify(resp);

$done({body});
