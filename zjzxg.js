/*
证件照相馆-美颜证件照&一寸证件照相机 — 永久会员
软件版本：1.4.2

原版：https://raw.githubusercontent.com/WeiGiegie/666/main/zjzxg.js
清理整理：Muse — 原版为 jsjiami 混淆，已还原。只改 VIP 相关字段；
           原版把 mobile/nickname 写成作者电报链接 (https://t.me/GieGie777)，
           已去掉，保留用户自己的手机号/昵称/头像/注册时间等身份字段。
           VIP 到 2999-09-09。

[rewrite_local]
^https?:\/\/appss\.rhinoxlab\.com\/app\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/zjzxg.js

[mitm]
hostname = appss.rhinoxlab.com
*/

var obj = JSON.parse($response.body);
if (!obj.result) obj.result = {};
var r = obj.result;

// 解锁 VIP（数值与原版一致）
obj.success = true;
obj.returnCode = "200";
obj.timeOut = false;
r.type = "VIP";
r.vipExpireTime = "2999-09-09 09:09:09";
r.vipExpireDays = 99999999;
r.vipGroupInfos = [{ "groupType": "TYPE_ONE", "vipType": "VIP", "autoPay": "NO" }];
r.remainTimeSeconds = 99999;
r.wordage = 888;
r.times = 88888;
r.realnameStatus = "NO";

$done({ body: JSON.stringify(obj) });
