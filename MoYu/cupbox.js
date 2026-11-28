/* Cupbox — 视频站去广告（内联 style）
 * 原作者：ddgksf2013
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广、Telegram 链接与原版链接，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = *.cupfox.com, *.cupfox.app */

var body = $response.body.replace(/<head>/, '<head><style>.mobile-nav, .model, .a4-box[class^="jsx-"], .cupfox, .swiper, .adsbygoogle {display:none!important} </style>');
$done({ body });
