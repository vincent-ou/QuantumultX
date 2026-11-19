/* 网易蜗牛读书 — VIP 解锁
 * 原作者：89996462
 * 适配版本：1.9.69
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = p.du.163.com
 */

var body=$response.body;

ojbk = body.replace(/tradeEndTime\":\d+/g,'tradeEndTime":4092599349000');

$done(ojbk);
