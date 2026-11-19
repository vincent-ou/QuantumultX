/* 奶油桌面 — VIP 解锁
 * 原作者：89996462
 * 适配版本：3.3.1
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = nz-api.duitang.com
 */

var body = $response.body; 
var obj = JSON.parse(body); 

obj.data.vip = true

body = JSON.stringify(obj);
$done({body});
