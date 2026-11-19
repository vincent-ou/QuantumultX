/* 笔趣阁 — VIP 解锁
 * 原作者：89996462
 * 适配版本：1.0.3
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.xgkjdytt.cn
 */

var body = $response.body.replace(/"ischarge":"false"/g,'"ischarge":"true"')
.replace(/"free_minutes":"\d+"/g,'"free_minutes":"99999"')
$done({ body });
