/* 网易蜗牛读书 — 解锁会员 / 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = p.du.163.com */


var body=$response.body;

resp = body.replace(/tradeEndTime\":\d+/g,'tradeEndTime":4092599349000');

$done(resp);
