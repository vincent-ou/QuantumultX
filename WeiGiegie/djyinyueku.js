/* DJ音乐库 — dj音乐库-dj电音音乐播放器  VIP
 * 原作者：WeiGiegie
 * 适配版本：2.6.7
 * 清理整理：Muse — 去除作者推广/Telegram 链接与无效注释，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = app-i.dj-5.com
 */

var body = $response.body;
let obj = JSON.parse($response.body);
obj.result.cover = "/usercovers/e9ac8cec71e04feeb0d6297bdea58a09.jpg"
obj.result.isvip = true;
obj.result.expiretime = 32493834549;
$done({
    body:  JSON.stringify(obj)
});
