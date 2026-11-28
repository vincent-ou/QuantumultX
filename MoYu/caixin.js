/* 财新 — 去开屏广告（财新 App，非财新周刊）
 * 原作者：ddgksf2013
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广、Telegram 链接与原版链接，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = gg.caixin.com */

var body = $response.body.replace(/sday":"[^"]*"/g, 'sday":"2029-12-01 00:00:00"')
		.replace(/eday":"[^"]*"/g, 'eday":"2029-12-30 00:00:00"')
		.replace(/intval":\d/g, 'intval":0')
$done({ body });
