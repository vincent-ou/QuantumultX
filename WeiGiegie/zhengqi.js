/* 正气 — 戒色助手
 * 原作者：WeiGiegie
 * 适配版本：7.1.33
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.zhengqi100.com,apio.zhengqi100.com
 */
let obj = JSON.parse($response.body);
console.log("执行了----");
if (obj.data) {
  obj.data.isVip = "on";
  obj.data.vip_expired_at = "2099-05-08 15:33:52";
  obj.data.days = 999999;
  obj.data.expire = "2099-05-08 15:33:52";
  obj.data.updated_at = "2000-05-12 23:19:43";
  obj.data.isAdmin = true;
  obj.data.adblock_expired_at = "2099-06-08 15:33:52";
}
$done({
  body: JSON.stringify(obj)
});