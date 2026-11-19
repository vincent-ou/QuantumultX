/* 幻休 — 幻休 SVIP 解锁
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.shaolinzen.com
 */
let obj=JSON.parse($response.body);let requestUrl=$request.url;if(/^https:\/\/api\.shaolinzen\.com\/user\/v1\/info?/.test(requestUrl)){obj.data.sipActive=1;obj.data.sipExpireTime="2222-02-22";obj.data.vipActive=1;obj.data.vipExpireTime="2222-02-22"}else if(/^https:\/\/api\.shaolinzen\.com\/system\/v1\/mime?/.test(requestUrl)){obj.data.middleTabList=obj.data.middleTabList.filter((el)=>el.id!=12);obj.data.bannerList=[]}$done({body:JSON.stringify(obj)});
