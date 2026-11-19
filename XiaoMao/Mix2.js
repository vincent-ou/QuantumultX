/* Mix2 — Mix2 会员解锁
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = bmall.camera360.com
 */
let obj=JSON.parse($response.body);let requestUrl=$request.url;if(/^https:\/\/bmall\.camera360\.com\/api\/iap\/check-receipt?/.test(requestUrl)){obj.data={errorCode:0,sandbox:0,isTrialPeriod:0,purchaseTime:1692026680,expireTime:7955085722,appleExpireTime:7955085722,originalTransactionId:"444444444444444",productId:"VIP_yearly_29.99",appleVip:1,operationVip:1,giftVip:1,}}$done({body:JSON.stringify(obj)});
