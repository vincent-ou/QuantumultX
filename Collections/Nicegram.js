/* Nicegram — 会员解锁（原文件为纯 JSON，改写为等效脚本） / 清理整理：Muse — 去作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = nicegram.cloud, restore-access.indream.app, api.mbrx.app */

var obj = JSON.parse($response.body || '{}');
obj.data = obj.data || {};
obj.data.premiumAccess = true;
$done({body: JSON.stringify(obj)});
