/* 小打卡 — 微信小程序解锁会员权限
 * 原作者：ddgksf2013（群友投稿）
 * 适配版本：0.0.0
 * 清理整理：Muse — 去除作者推广、Telegram 链接与未使用的 cuttlefish 变量，逻辑与原版一致
 * [rewrite_local]
 * ^https?:\/\/uranus\.sharedaka\.com\/api\/v3\/user\/info\/get url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/MoYu/xiaodaka.js
 * [mitm] hostname = uranus.sharedaka.com */

let obj = JSON.parse($response.body);
obj.data.endTime = 1867996357000;
obj.data.hasOpenedMember = true;
$done({body: JSON.stringify(obj)});
