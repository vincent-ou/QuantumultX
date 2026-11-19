/* 考考鸭 — 考考鸭
 * 原作者：WeiGiegie
 * 适配版本：1.04
 * 清理整理：Muse — 去除作者推广/Telegram 链接与无效注释，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = kky.logtk.com
 */

var body = $response.body; 
let obj = JSON.parse($response.body);
obj.data.userInfo.isMember = "1";
$done({body: JSON.stringify(obj)});
