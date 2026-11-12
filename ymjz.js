/*
一木记账 — 永久会员

原版：https://raw.githubusercontent.com/chxm1023/Rewrite/main/yimujizhang.js
清理整理：Muse — 仅做结构清理（加 result 空值保护、去作者推广），逻辑与数值与原版一致。
           会员到期 2099-09-09，vipType 2 = 永久会员。

[rewrite_local]
^https?:\/\/yimuapp\.com:8082\/bookkeeping\/user\/getUserInfoById url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/ymjz.js

[mitm]
hostname = yimuapp.com
*/

var obj = JSON.parse($response.body);
if (!obj.result) obj.result = {};

obj.result.vipTime = 4092599349000;  // 会员到期时间：2099-09-09
obj.result.vipType = 2;             // 永久会员

$done({ body: JSON.stringify(obj) });
