/* 塔奇剧场 — 会员解锁
 * 原作者：WeiGiegie
 * 适配版本：未注明
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = quickapi.xiegangsir.com
 */
var body = $response.body;
let obj = JSON.parse($response.body);
obj.result.vip_time = 32493834549, $done({
  body: JSON.stringify(obj)
});