/* 一飞记账 — 解锁会员 / 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = jz.jarstones.com */

var body = $response.body;

body = body.replace(/\"vipValid":\w+/g, '\"vipValid":true');

body = body.replace(/\"vipExpired":\w+/g, '\"vipExpired":false');

body = body.replace(/\"vipType":\d+/g, '\"vipType":3');

$done({body});
