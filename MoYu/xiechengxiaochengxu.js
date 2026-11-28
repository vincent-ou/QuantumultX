/* 携程 — 小程序去广告
 * 原作者：ddgksf2013
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广、Telegram 链接与原版链接，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = m.ctrip.com */

var ddgksf2013=JSON.parse($response.body);ddgksf2013.data.items=[],$done({body:JSON.stringify(ddgksf2013)});
