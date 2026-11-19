/* 熊猫脑洞小说 — 会员解锁
 * 原作者：WeiGiegie
 * 适配版本：2.14
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = xiaoshuo.xmxsapp.com
 */
var body = $response.body;
let obj = JSON.parse($response.body);
obj.data.user_area.base_info.is_vip = "1", obj.data.user_area.base_info.vip_show_type = "1", obj.data.user_area.vip_info.vip_privilege_desc = "2999-09-09到期", delete obj.data.user_area.vip_info.deadline_date, $done({
  body: JSON.stringify(obj)
});