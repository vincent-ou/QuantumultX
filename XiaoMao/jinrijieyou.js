/* 今日解忧 — 今日解忧 Pro 解锁
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
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
