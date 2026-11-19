/* 糖果追剧 — 全网海量热门短剧小说
 * 原作者：WeiGiegie
 * 适配版本：1.0.6
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = candydjapi.winner1319.top
 */
let obj = JSON.parse($response.body);
if (obj.data) {
  obj.data.vipInfo = 4102444799000;
  obj.data.buyVipState = 1;
  obj.data.vipEnabled = true;
}
$done({
  body: JSON.stringify(obj)
});