/* 全网热门短剧 — 热门短剧无限看免费电视剧
 * 原作者：WeiGiegie
 * 适配版本：1.2
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = iosqwrmdj.sanwubeixin.cn
 */
var body = $response.body;
let obj = JSON.parse($response.body);
obj.data.isVip = true, obj.data.vip_type = 1, obj.data.vip_time = 32493834549, $done({
  body: JSON.stringify(obj)
});