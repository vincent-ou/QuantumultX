/* 漫画台Lite — 微信小程序漫画价格改 0
 * 原作者：ddgksf2013
 * 适配版本：0.0.0
 * 清理整理：Muse — 去除作者推广、Telegram 链接与未使用的 cuttlefish 变量，逻辑与原版一致
 * [rewrite_local]
 * ^https?:\/\/comic\.321mh\.com\/app_api\/v\d\/getcomicinfo_body url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/MoYu/manhuatai.js
 * [mitm] hostname = comic.321mh.com */

var body = $response.body.replace(/price":\d+/g,'price":0')
$done({ body });

