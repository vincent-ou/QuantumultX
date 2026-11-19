/* 星空外语 — ai英语口语练习-雅思口语真题-ai外教一对一陪
 * 原作者：WeiGiegie
 * 适配版本：1.8.0
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.skyai.tech
 */
let obj = JSON.parse($response.body);
obj.subscriptionStatus.vip = "sky_lingo_year";
obj.subscriptionStatus.subscribed = true;
obj.subscriptionStatus.lifetimeVIP = true;
obj.subscriptionStatus.inGracePeriod = false;
obj.subscriptionStatus.expiresAt = 4102444800000;
$done({
  body: JSON.stringify(obj)
});