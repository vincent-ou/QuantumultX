/* TestFlight — 下载链接改写（TestFlight 链接路径重组）
 * 原作者：ddgksf2013
 * 适配版本：未注明
 * 清理整理：Muse — 补注释头，逻辑与原版一致
 * [rewrite_local]
 * ^https?:\/\/testflight\.apple\.com\/.* url script-request-header https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/MoYu/testflight.js
 * [mitm] hostname = testflight.apple.com */

//下载启动
if (/^https?:\/\/testflight\.apple\.com\/v2\/accounts\/.*\/apps\/\d*\/builds\/\d*\/install/.test(url)) {
	var tmp= $request.url.match(/apps\/\d*\/builds\/\d*\/install/g);
	modifiedPath = '/v2/accounts/'+modifiedPath+'/'+tmp[0];
}
//点开新tf+接受tf
if (/^https?:\/\/testflight\.apple\.com\/v3\/accounts\/[a-z0-9_-]+\/ru\/[a-zA-Z0-9_-]+/.test(url)) {
	var tmp= $request.url.match(/ru\/.*/g);
	modifiedPath = '/v3/accounts/'+modifiedPath+'/'+tmp[0];
//console.log(modifiedPath);
	
}
//个人页面
if (/^https?:\/\/testflight\.apple\.com\/v3\/accounts\/[a-z0-9_-]+\/apps/.test(url)) {
	var tmp= $request.url.match(/apps.*/g);
modifiedPath = '/v3/accounts/'+modifiedPath+'/'+tmp[0];
	
}
//单个tf页面
if (/^https?:\/\/testflight\.apple\.com\/v2\/accounts\/.*\/apps\/\d*\/builds\/\d*$/.test(url)) {
	var tmp= $request.url.match(/apps\/\d*\/builds\/\d*$/g);
	modifiedPath = '/v2/accounts/'+modifiedPath+'/'+tmp[0];
	
}
//单个tf历史build页面
if (/^https?:\/\/testflight\.apple\.com\/v2\/accounts\/.*\/apps\/\d*\/platforms\/ios\/trains/.test(url)) {
	var tmp= $request.url.match(/apps\/\d*\/platforms\/ios\/trains.*/g);
	modifiedPath = '/v2/accounts/'+modifiedPath+'/'+tmp[0];

}

$done({path: modifiedPath, headers : modifiedHeaders});
