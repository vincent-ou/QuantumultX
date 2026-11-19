/* 小区楼号地图 — 快递外卖极速导航
 * 原作者：WeiGiegie
 * 适配版本：1.0.10
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = mp.zhuzixi.cn
 */
var obj = JSON.parse($response.body);
obj.isActive = true;
obj.data.trialEnd = "2099/01/01 00:00:00";
$done({
  body: JSON.stringify(obj)
});