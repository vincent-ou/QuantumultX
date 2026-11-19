/* 阅己 — VIP 解锁
 * 原作者：89996462
 * 适配版本：1.0.4
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = great.starsdsea.com:12502
 */

let obj = JSON.parse($response.body);
obj.data.isVip = true;
obj.data.userEndTime = 4092595200001;
obj.data.userPoints = 9999;
$done({
    body: JSON.stringify(obj)
});
