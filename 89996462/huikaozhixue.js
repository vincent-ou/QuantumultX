/* 慧考智学 — 慧考智学
 * 原作者：89996462
 * 适配版本：1.4.2
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = proxyweb.huikao8.com
 */

var body = $response.body.replace(/"tryBuy":\d/g,'"tryBuy":2')
$done({ body });
