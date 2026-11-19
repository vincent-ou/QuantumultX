/* 小包搜题 — 小包搜题
 * 原作者：89996462
 * 适配版本：1.8.3
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = soti.ixyzh.com
 */

var body = $response.body.replace(/isVip":"\d"/g,'isVip":"1"')
$done({ body });
