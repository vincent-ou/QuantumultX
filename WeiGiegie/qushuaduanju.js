/* 去刷短剧 — 会员解锁
 * 原作者：WeiGiegie
 * 适配版本：1.0.3
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = qs.szqibu.cn
 */
var body = $response.body;
let obj = JSON.parse($response.body);
obj.data.vip_endtime = 32493834549000;
$done({
  body: JSON.stringify(obj)
});