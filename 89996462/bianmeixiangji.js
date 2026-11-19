/* 变美相机 — VIP 解锁
 * 原作者：89996462
 * 适配版本：1.0.2
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = writer.saladn.xyz
 */

var objc = JSON.parse($response.body);
    objc = {
  "status" : 1,
  "expires_date" : "9999-09-24 15:54:56"
}
$done({body : JSON.stringify(objc)});
