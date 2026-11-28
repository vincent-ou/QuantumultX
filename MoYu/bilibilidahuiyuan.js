/* 哔哩哔哩大会员 — 大会员通用破解（请求头清空）
 * 原作者：ddgksf2013
 * 适配版本：7.63.0
 * 清理整理：Muse — 去除作者推广、Telegram 链接与原版链接，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = app.bilibili.com, grpc.biliapi.net, *.biliapi.net, api.bilibili.com, api.live.bilibili.com, api.vc.bilibili.com, dataflow.biliapi.com */

var modifiedHeaders = $request['headers'];
modifiedHeaders['Cookie'] = '';
modifiedHeaders['x-bili-device-bin'] = '';
modifiedHeaders['Authorization'] = '';
modifiedHeaders['User-Agent'] = '';
modifiedHeaders['buvid'] = '';
modifiedHeaders['x-bili-metadata-bin'] = '';
modifiedHeaders['x-bili-locale-bin'] = '';
modifiedHeaders['x-bili-network-bin'] = '';
modifiedHeaders['x-bili-fawkes-req-bin'] = '';
modifiedHeaders['x-bili-trace-id'] = '';
$done({'headers': modifiedHeaders});
