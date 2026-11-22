/* Spotify — 把 artist/album 请求的 platform=iphone 改成 platform=ipad（配合 Spotify.snippet 使用）
 * 清理整理：Muse — 从 app2smile 的 Spotify 模块转存，逻辑未动，仅改注释头
 * 原作者：app2smile
 * 适配版本：未注明
 * [rewrite_local]
 * [mitm] hostname = spclient.wg.spotify.com, *spclient.spotify.com
 */

console.log(`spotify-json-2025.06.20`);
let url = $request.url;
// console.log(`原始url:${url}`);
if (url.includes('com:443')) {
    url = url.replace(/com:443/, 'com');
}
if (url.includes('platform=iphone')) {
    url = url.replace(/platform=iphone/, 'platform=ipad');
    // console.log(`替换platform:${url}`);
} else {
    console.log('无需处理');
}
$done({
    url
});
