/* Spotify — 删除 customize 请求的 If-None-Match 请求头（配合 Spotify.snippet 使用）
 * 清理整理：Muse — 从 app2smile 的 Spotify 模块转存，逻辑未动，仅改注释头
 * 原作者：app2smile
 * 适配版本：未注明
 * [rewrite_local]
 * [mitm] hostname = spclient.wg.spotify.com, *spclient.spotify.com
 */

let headers = $request.headers;
delete headers['If-None-Match'];
console.log('2025.03.20-qx-spotify删除请求头')
$done({headers});
