/* 奇点阅读 — 去广告
 * 原作者：ddgksf2013
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广、Telegram 链接与原版链接，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = （待补，需抓包确认） */

const version = 'V1.0.0';


var obj=JSON.parse($response.body);const propertiesToDelete=["ads2","adSource2","third"];for(const prop of propertiesToDelete)obj.data?.[prop]&&(obj.data[prop]={});$done({body:JSON.stringify(obj)});
