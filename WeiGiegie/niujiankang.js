/* 牛健康 — 牛健康-ai营养师减肥私教-体重身材管理好搭档
 * 原作者：WeiGiegie
 * 适配版本：4.11.0
 * 清理整理：Muse — 去除作者推广与注释头，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = gw.qnniu.com
 */

let obj = JSON.parse($response.body);
obj.data.member_record = {
  "expire_end_at" : 253402271999,
  "expire_begin_at" : 1772601170,
  "free_trial_period" : 36500,
  "member_card_category" : 6
};
$done({body: JSON.stringify(obj)});
