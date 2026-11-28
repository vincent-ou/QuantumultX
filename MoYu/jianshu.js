/* 简书 — 手机网页版净化
 * 原作者：elecV2
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广、Telegram 链接与原版链接，逻辑与数值与原版一致；原 elecV2 规则地址已换成用户库
 * [rewrite_local]
 * [mitm] hostname = www.jianshu.com */

let body = $response.body

if (/<\/html>|<\/body>/.test(body)) {
  body = body.replace('</head>', `<style type="text/css">
*{max-width:100%!important;box-sizing:border-box!important;}.side-tool, #note-fixed-ad-container, #free-reward-panel, .show-foot, .meta-bottom, aside, nav, ._13lIbp, ._3Pnjry, ._7hb9O4, ._1kCBjS, ._3tCVn5, .-pXE92, .note-graceful-button, .call-app-btn, .recommend-ad, ._2xr8G8{display:none!important}._3VRLsv, .ouvJEz{padding: 12px}._gp-ck, .W2TSX_{margin: 0!important;}
</style></head>`)

  console.log('添加 tamperJS：jianshu.js')
}

$done({ body })
