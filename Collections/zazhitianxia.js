/* 杂志天下 — 解锁会员 / 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = www.fuyoutech.club */

var obj = JSON.parse($response.body);

obj.memberStatus = 2;
obj.startTime = "2022-09-09 09:09:09";
obj.finishTime = "2099-09-09 09:09:09";

$done({body : JSON.stringify(obj)});
