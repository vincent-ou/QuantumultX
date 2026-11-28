/* Bing — 首页净化
 * 原作者：ddgksf2013
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广、Telegram 链接与原版链接，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = sapphire.api.microsoftapp.net, assets.msn.com, api.msn.com */

const version = 'V1.0.1';


let body=$response.body;if(body){if(!0===/config\/api\/v1\/get/.test($request.url))try{let e=JSON.parse(body);e.data.apps=e.data.apps.filter(e=>!("News"==e.appCategory||"Operation"==e.appCategory||"Entertainment"==e.appCategory||"Weather"==e.appName||"Weather: Maps"==e.appName||"0News-L2SDK-Interests"==e.appName)),body=JSON.stringify(e)}catch(a){console.log("bing : "+a)}else $done({});$done({body})}else $done({});
