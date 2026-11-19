/* Alarmy — Alarmy 高级订阅解锁
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = ars.alar.my
 */
let obj=JSON.parse($response.body);let requestUrl=$request.url;if(/^https:\/\/ars\.alar\.my\/api\/v2\/user\/sync?/.test(requestUrl)){let subscription={isActive:true,willAutoRenew:true,periodType:"YEARLY",productID:"droom.sleepIfUCanFree.premium.yearly",originalTransactionID:"66666666666",expiresDateMs:7956886942000,latestPurchaseDateMs:1697702605000,originalPurchaseDateMs:1697702605000,};obj.subscription=[subscription];$notify("XiaoMao_Alarmy 执行成功！","","Nice!已解锁成功，可关掉此脚本。",{"open-url":"","media-url":"",})}$done({body:JSON.stringify(obj)});
