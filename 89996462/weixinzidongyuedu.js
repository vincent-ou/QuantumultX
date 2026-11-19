/* 微信自动阅读 — 微信文章自动阅读（非 VIP 解锁）
 * 原作者：89996462
 * 适配版本：8888
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = mp.weixin.qq.com
 */

var body = $response.body
    .replace(/<\/script>/, 'setTimeout(()=>window.history.back(),5000); </script>');
$done({ body });
