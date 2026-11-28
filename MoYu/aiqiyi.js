/* 爱奇艺 — 去开屏广告
 * 原作者：ddgksf2013
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广、Telegram 链接与原版链接，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = cupid.iqiyi.com */

let obj=JSON.parse($response.body);delete obj.adSlots,$done({body:JSON.stringify(obj)});
