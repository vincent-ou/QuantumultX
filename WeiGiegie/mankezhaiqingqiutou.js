/* 漫客宅请求头 — 漫客宅,会员漫画小说解锁
 * 原作者：WeiGiegie
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广与注释头，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = member.mkzcdn.com,comic.mkzcdn.com,base.mkzcdn.com
 */

var modifiedUrl = $request.url
.replace(/(&sign=\w+)/, '&sign=8168f4b711fde3b254c5b8c318ff20d0')
.replace(/(&uid=\d+)/, '&uid=79633560');


$done({
    url: modifiedUrl
});
