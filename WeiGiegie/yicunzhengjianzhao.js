/* 一寸证件照 — 会员解锁
 * 原作者：WeiGiegie
 * 适配版本：1.1.3
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = idp2api.netpock.com
 */
let obj = JSON.parse($response.body);
if (obj.data) {
  obj.data.is_vip = 1;
  obj.data.vip_expiration_time = 4102444799000;
}
$done({
  body: JSON.stringify(obj)
});