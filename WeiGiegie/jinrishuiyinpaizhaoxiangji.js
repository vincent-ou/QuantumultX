/* 今日水印拍照相机 — 今日水印拍照相机 Pro
 * 原作者：WeiGiegie
 * 适配版本：1.7
 * 清理整理：Muse — 去除作者推广/Telegram 链接与无效注释，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = water-fst.yifanxinmei.com
 */

var body = $response.body;
let obj = JSON.parse($response.body);
obj.data.identity.vip = 1;
obj.data.identity.vip_expire_date = 32493834549000;
$done({
    body:  JSON.stringify(obj)
});
