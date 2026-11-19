/* 作业改改 — VIP 解锁
 * 原作者：89996462
 * 适配版本：1.3
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = operationshomework.wengdehen.top
 */

var body = $response.body.replace(/userIsOperationsHomeworkVip":\d+/g,'userIsOperationsHomeworkVip":1')
.replace(/promotionStatus":\d+/g,'promotionStatus":1')
$done({ body });
