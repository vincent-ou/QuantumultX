/* 水印宝 — 解锁终身会员
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = water*.yunxiaoguo.cn */

var obj = JSON.parse($response.body);

obj.content.waterVipInfo = {      "beginTime": "2023-09-09 09:09:09",      "createTime": "2023-09-09 09:09:09",      "expireTime": "2099-09-09 09:09:09",      "firstOpenTime": "2023-09-09 09:09:09",      "remainDays": 9999,      "sign": "Goiwv0Gt03s",      "typeName": "终身会员",      "userSign": "Muse"    };

$done({body : JSON.stringify(obj)});
