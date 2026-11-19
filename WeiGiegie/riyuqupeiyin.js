/* 日语趣配音 — 零基础学日语
 * 原作者：WeiGiegie
 * 适配版本：1.7.5
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = japaneselar.qupeiyin.com
 */
var obj = JSON.parse($response.body);
if (obj.data) {
  obj.data.is_vip = "1";
  obj.data.type = "2";
}
$done({
  body: JSON.stringify(obj)
});