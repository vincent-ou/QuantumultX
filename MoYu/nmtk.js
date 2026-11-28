/* NMTK — integral 改 2099 的解锁
 * 原作者：ddgksf2013
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广、Telegram 链接与原版链接，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = （待补，需抓包确认） */

var body = $response.body.replace(/integral":\d/,'integral":2099').replace(/success":false/,'success":true');

$done({ body });
