/* 心晴计划 — 日常计划-project50自律健身打卡-习惯养
 * 原作者：WeiGiegie
 * 适配版本：1.4.6
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = relaxed.navolove.com
 */
let body = $response.body;
let obj = JSON.parse(body);
if (obj.data) {
  obj.data.is_vip = true;
  obj.data.vip_type = 5;
  obj.data.end_at = "2099-12-31 23:59:59";
  obj.data.expire_time = 9999999999;
  obj.data.expire_time_format = "永久有效";
}
body = JSON.stringify(obj);
$done({
  body
});