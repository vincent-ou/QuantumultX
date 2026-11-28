/* 白视TV — 过滤广告
 * 原作者：ddgksf2013
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广、Telegram 链接与原版链接，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = （待补，需抓包确认） */

var obj=JSON.parse($response.body);obj.dt.data=Object.values(obj.dt.data).filter(a=>-1===a.jumpTypeString.indexOf("广告")),$done({body:JSON.stringify(obj)});
