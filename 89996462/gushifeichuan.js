/* 故事飞船 — 不显示VIP
 * 原作者：89996462
 * 适配版本：3.1.8
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = storybook.ifenghui.com
 */

var body = $response.body.replace(/"isFree":0/g,'"isFree":1')
.replace(/"isLock":1/g,'"isLock":0')
$done({ body });
