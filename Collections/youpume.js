/* 有谱么 — 解锁会员
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = yopu.co */

var obj = JSON.parse($response.body);

obj.level = 1;
obj.isMember = true;
obj.adsDisabled = true;
obj.adsDisabledTill = 4092599349000;

$done({ body: JSON.stringify(obj)});
