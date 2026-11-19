/* 闪萌表情 — VIP 解锁
 * 原作者：89996462
 * 适配版本：2.0.12
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = hi-api.weshineapp.com
 */

var Q = JSON.parse($response.body);
Q.data.is_vip = 1;
Q.data.vip_expiration_time = "2099-09-09";
Q.data.gender = 1;
$done({body : JSON.stringify(Q)});
