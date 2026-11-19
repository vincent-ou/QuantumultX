/* 探味闲置 — 会员解锁
 * 原作者：WeiGiegie
 * 适配版本：1.2.8
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = admin.tanweixianzhi.com
 */
let obj = JSON.parse($response.body);
obj.data.is_vip = 1;
obj.data.vip_level = 1;
obj.data.vip_validity = "2099-11-23 00:00:00";
obj.data.is_free = 1;
obj.data.is_buy = 1;
$done({
  body: JSON.stringify(obj)
});