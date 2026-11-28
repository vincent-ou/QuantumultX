/* 泥巴影院 — 网页去广告
 * 原作者：Adblock4limbo
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广、Telegram 链接与原版链接，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = m.nivod4.tv */

var body = $response.body.replace(/<head>/, '<head><style>img[src*=gif], .video-ad, .nav-ads, #adDiv, .v-ad, .ad-text, #video-container + ul[style^=\"width:\"] > li > img {display: none !important}</style>');
$done({ body });
