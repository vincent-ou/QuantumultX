/* 转易侠PDF转换器 — VIP 解锁
 * 原作者：89996462
 * 适配版本：1.0.8
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = vip.zhuanyixia.cn
 */

var body = $response.body.replace(/isvip":\d+/g,'isvip":1')
.replace(/isSuperVip":\d/g,'isSuperVip":1')
.replace(/superVipBeginTime":\d+/g,'superVipBeginTime":8888888888')
.replace(/superVipEndTime":\d+/g,'superVipEndTime":8888888888')
.replace(/FreeMaxNum":\d+/g,'FreeMaxNum":8888')
.replace(/limitCount":\d+/g,'limitCount":89996462')
$done({ body });
