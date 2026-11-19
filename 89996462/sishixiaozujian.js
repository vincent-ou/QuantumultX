/* 小组件（40sishi） — VIP 解锁
 * 原作者：89996462
 * 适配版本：未注明
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = www.40sishi.com
 */

var body = $response.body.replace(/state":\d+/g,'state":1')
.replace(/forever":\w+/g,'forever":true')
$done({ body });
