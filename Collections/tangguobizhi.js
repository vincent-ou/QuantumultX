/* 糖果壁纸 — 解锁会员
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = w.5hzs.com */

var obj = JSON.parse($response.body);

obj.data.member = {"is_vip" : true};
obj.data.sex = 1;
obj.data.type = 1;
obj.data.command = true;
obj.data.status = 2;
obj.data.creator = true;

$done({body : JSON.stringify(obj)});
