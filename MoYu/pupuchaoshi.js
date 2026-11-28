/* 朴朴超市 — 去开屏广告、搜索轮播填充
 * 原作者：ddgksf2013
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广、Telegram 链接与原版链接，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = （待补，需抓包确认） */

const version = 'V1.0.0';

var obj=JSON.parse($response.body);obj.data&&(obj.data=Object.values(obj.data).filter(o=>!(320==o.position_type||710==o.position_type||50==o.position_type))),$done({body:JSON.stringify(obj)});
