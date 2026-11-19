/* 轻音社 — 会员解锁
 * 原作者：WeiGiegie
 * 适配版本：1.1.4
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = fuciyuanbang.ciyuans.com
 */
var body = $response.body;
let obj = JSON.parse($response.body);
obj.result.vip = "1";
$done({
  body: JSON.stringify(obj)
});