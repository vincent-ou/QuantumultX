/*
麦片屏幕翻译 — 高级订阅

原版：https://raw.githubusercontent.com/chxm1023/Rewrite/main/mppmfy.js
清理整理：Muse — 仅去作者推广，逻辑与数值与原版一致。
           高级订阅（level 3），无限次，到期 2099-09-09。

[rewrite_local]
^https?:\/\/youxifanyizhushou\.com\/ios\/api\/product\/user\/remain\/ios url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/mppmfy.js

[mitm]
hostname = youxifanyizhushou.com
*/

var obj = JSON.parse($response.body);

obj.data = [{
  "infinite": true,
  "productPayType": 1,
  "times": 9999,
  "level": 3,
  "desc": "高级订阅",
  "expireTime": "2099-09-09 09:09:09"
}];

$done({ body: JSON.stringify(obj) });
