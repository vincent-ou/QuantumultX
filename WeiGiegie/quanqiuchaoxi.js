/* 全球潮汐 — 全球天气预报及离线潮汐
 * 原作者：WeiGiegie
 * 适配版本：5.2.0
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = g.catches.com
 */
let obj = JSON.parse($response.body);
if (obj.data) {
  obj.data.isVip = 1;
  obj.data.vipExpireTime = 4102415999000;
}
$done({
  body: JSON.stringify(obj)
});