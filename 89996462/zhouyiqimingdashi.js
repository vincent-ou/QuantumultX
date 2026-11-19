/* 周易起名大师 — VIP 解锁
 * 原作者：89996462
 * 适配版本：2.2.6
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = www.zhouyilive.com
 */

var body = $response.body.replace(/"vip":"0"/g,'"vip":"1"')
$done({ body });
