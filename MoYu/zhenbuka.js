/* 真不卡 — 视频站去广告（内联 style）
 * 原作者：ddgksf2013
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广、Telegram 链接与原版链接，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = *.zhenbuka.com */

var body = $response.body.replace(/<head>/, '<head><style>img#hth,img#hth616,div[style*="line-height: 21px"],div#layui-layer1,div#layui-layer-shade1,div.marquee_outer,img#ad_img,img#buka888,iframe[id^=buffer],span.more.text-muted.pull-right,ul.more-btn,a[target^="_blank"],div.jq-toast-wrap,img#tj,img[src*=".gif"]{display:none!important} </style>')
                         .replace(/'159140'/g, "'259140'")
                         .replace(/\<div  class=\"item stui-banner__item[\s\S]*html[\s\S]*?\<\/div\>/g, "")
                         .replace(/img id="ik\d+"/g, 'img id="removed"');
$done({ body });
