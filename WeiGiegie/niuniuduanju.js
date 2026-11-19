/* 牛牛短剧 — 短剧官方-海量热门短剧视频大全随心看
 * 原作者：WeiGiegie
 * 适配版本：1.5.8
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = new.tianjinzhitongdaohe.com
 */
var body = $response.body;
let obj = JSON.parse($response.body);
obj.data.isVip = 1;
$done({
  body: JSON.stringify(obj)
});