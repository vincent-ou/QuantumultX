/* 记乎 — 解锁订阅
 * 原作者：89996462
 * 适配版本：3.4.7
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.geefoo.cn
 */

var body = JSON.parse($response.body);

body.vip.expired_at = 4093235012;

$done({ body: JSON.stringify(body) });
