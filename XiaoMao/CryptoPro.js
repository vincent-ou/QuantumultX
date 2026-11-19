/* CryptoPro — CryptoPro 终身订阅解锁
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.cryptopro.app
 */
var obj=JSON.parse($response.body);changeValueToOne(obj);function changeValueToOne(obj){var keys=Object.keys(obj);for(var i=0;i<keys.length;i++){if(obj[keys[i]]===0){obj[keys[i]]=1}}}$done({body:JSON.stringify(obj)});
