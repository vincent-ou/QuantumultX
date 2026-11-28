/* 爱壁纸 — 壁纸原图直链通知
 * 原作者：ddgksf2013
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广、Telegram 链接与原版链接，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = *.ibzhi.com */

var wallpaperId = $request.url.match(/wallpaperId%22%3A%22(\w+)%22/)[1];

var openUrl = 'https://hwoss.ibzhi.com/wallpaper/'+wallpaperId+'.jpg';

$notify("爱壁纸", "", "点击我",{"open-url":openUrl});

$done({});
