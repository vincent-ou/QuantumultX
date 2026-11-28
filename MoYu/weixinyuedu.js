/* 微信阅读 — 微信阅读文章自动刷积分（打开文章后自动返回上一篇，单篇约 80～100 积分）
 * 原作者：ddgksf2013
 * 适配版本：未注明
 * 清理整理：Muse — 去除短链接、Telegram 链接与原版链接，逻辑与原版一致
 * [rewrite_local]
 * ^https?://mp\.weixin\.qq\.com/s\?.* url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/MoYu/weixinyuedu.js
 * [mitm] hostname = mp.weixin.qq.com */

var randomTimeout = Math.floor(Math.random() * (7000 - 5000 + 1)) + 5000;
var body = $response.body.replace(/<\/script>/, `setTimeout(() => window.history.back(), ${randomTimeout}); </script>`);
$done({ body });
