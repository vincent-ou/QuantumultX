/* 番茄短剧 — 番茄短剧-视频大全海量爆款短剧持续更新
 * 原作者：WeiGiegie
 * 适配版本：1.2.0.1
 * 清理整理：Muse — 去除作者推广/Telegram 链接与无效注释，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = 8.149.129.124
 */

var body = $response.body; 
let obj = JSON.parse($response.body);
obj.vipExpiresAt = "2999-09-01T00:00:00Z"
$done({body: JSON.stringify(obj)});
