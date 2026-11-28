/* amdc — 共享 helper：处理 amdc 请求（供高德地图、菜鸟等引用）
 * 原作者：ddgksf2013
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广、Telegram 链接与原版链接，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = amdc.m.taobao.com */

const version = 'V1.0.11';



var ua=$request.headers["User-Agent"]||$request.headers["user-agent"];/(AMap|Cainiao|%E9%97%B2%E9%B1%BC|%E9%A3%9E%E7%8C%AA%E6%97%85%E8%A1%8C|%E5%96%B5%E8%A1%97|%E5%A4%A9%E7%8C%AB|Alibaba|MovieApp|Hema4iPhone|Moon|DMPortal)/.test(ua)?$done({body:"ddgksf2013"}):$done({});
