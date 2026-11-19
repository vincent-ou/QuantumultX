/* 指尖时光 — 解锁订阅
 * 原作者：89996462
 * 适配版本：6.3.70
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = integral2.zhijiantime.com
 */

var body = JSON.parse($response.body);

body.data.VIP = 1;

$done({ body: JSON.stringify(body) });
