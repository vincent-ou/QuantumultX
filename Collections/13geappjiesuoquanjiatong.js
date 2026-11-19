/* 13个APP解锁全家桶 — 13 个 App 解锁全家桶 / 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = standard.rhinox*.com, appss.rhinox*.com, appss.linhongshi.com */

var obj = JSON.parse($response.body);
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];

if (ua.indexOf('bnchangtu') != -1) {
  obj.result["type"] = "FOREVER";
} else { obj.result["type"] = "VIP"; }
obj.result["vipGroupInfos"] = [      {        "groupType" : "TYPE_ONE",        "vipType" : "VIP",        "autoPay" : "YES"      }    ];
obj.result["vipExpireTime"] = "2099-09-09 09:09:09";
obj.result["vipExpireDays"] = 999999;

$done({body : JSON.stringify(obj)});
