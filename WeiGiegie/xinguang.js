/* 心光 — ai-生活记录伴侣
 * 原作者：WeiGiegie
 * 适配版本：4.0.31
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = moolight.online
 */
let obj = JSON.parse($response.body);
obj.data.roles = [{
  "roleKey": "vip",
  "roleId": 3,
  "expirationTime": "2099-11-13"
}];
$done({
  body: JSON.stringify(obj)
});