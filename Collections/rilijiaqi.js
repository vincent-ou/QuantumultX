/* 日历假期 — 解锁会员 / 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = calendar.aiyohoo.com */

var body = $response.body

body = body.replace(/\"vip_expired_time":\d+/g, '\"vip_expired_time":4092599349000');
body = body.replace(/\"vip":\d+/g,'\"vip":1');
body = body.replace(/\"required_vip":\d+/g, '\"required_vip":10');

$done({body});
