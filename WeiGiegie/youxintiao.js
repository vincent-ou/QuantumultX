/* 有心跳 — 舞蹈-跳舞-学舞神器
 * 原作者：WeiGiegie
 * 适配版本：1.75.5
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.train2win.cn
 */
let body = $response.body;
let obj = JSON.parse(body);
if (obj.data) {
  obj.data.isVip = true;
  obj.data.level = "VIP";
  obj.data.appleProductId = "forever_449";
}
$done({
  body: JSON.stringify(obj)
});