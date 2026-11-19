/* 旅途随身听 — 解锁会员 / 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = www.1314zhilv.com */

var body = $response.body

body = body.replace(/\"identityType":\d+/g, '\"identityType":2');
body = body.replace(/\"levDesc":".*?"/g,'\"levDesc":"永久会员"');
body = body.replace(/\"isActivate":\d+/g,'\"isActivate":1');
body = body.replace(/\"audioType":\d+/g, '\"audioType":1');
body = body.replace(/\"isAudition":\d+/g, '\"isAudition":2');

$done({body});