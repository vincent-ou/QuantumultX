/* flomo — 解锁 Pro
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 原版为 jsjiami 混淆，已在 Node 沙箱执行验证并还原为明文逻辑；去作者推广，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = fl*app.com */

var obj = JSON.parse($response.body);
obj.data = obj.data || {};
obj.data.referee_pro_days = 99999;
obj.data.pro_expired_at = "2099-09-09 09:09:09";
$done({ body: JSON.stringify(obj) });
