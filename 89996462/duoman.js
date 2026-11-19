/* 多漫 — 多漫
 * 原作者：89996462
 * 适配版本：2.4
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = duoman.flyingeffect.com
 */

var body = JSON.parse($response.body);

body.data.vip_end_time = "2099-12-31 23:01:42";
body.data.level = 1;
body.data.is_vip = 1;

$done({ body: JSON.stringify(body) });
