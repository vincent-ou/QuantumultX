/* 咔皮相机 — VIP 解锁
 * 原作者：89996462
 * 适配版本：3.2.3
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = kapi-action.shyuhuankj.com
 */

var body = $response.body.replace(/level":\d/g,'level":1')
.replace(/expireTime":\w+/g,'expireTime":8888888888000')
.replace(/expireTimestamp":\d+/g,'expireTimestamp":8888888888000')
$done({ body });
