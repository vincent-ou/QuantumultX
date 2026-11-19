/* 今日解忧 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.2
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.iappdaily.com
 */

var obj = JSON.parse(
  $response.body
    .replace(/\"is_vip\":0/g, '"is_vip":1')
    .replace(/\"is_paid\":0/g, '"is_paid":1')
    .replace(/\"vip_expired\":0/g, '"vip_expired":1726411565000')
);

$done({ body: JSON.stringify(obj) });
