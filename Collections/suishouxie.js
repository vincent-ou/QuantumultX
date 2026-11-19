/* 随手写 — 解锁 VIP / 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = www.kkmop.com */

var obj = JSON.parse($response.body);

obj.resultMsg = JSON.stringify({ ...JSON.parse(obj.resultMsg), vip: true, vipDays: 4092599349,  vipDateTo: "2099-09-09T09:09:09Z",  viptime: "2099-09-09T09:09:09Z" });

$done({ body: JSON.stringify(obj)});
