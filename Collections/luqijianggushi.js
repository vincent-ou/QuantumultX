/* 陆琪讲故事 — 解锁 VIP、全部节目 / 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = www.luqijianggushi.com */

var body = $response.body;

body = body.replace(/\"is_share":\d+/g, '\"is_share":1');
body = body.replace(/\"is_vip":\d+/g, '\"is_vip":1');
body = body.replace(/\"_vip_endtime":".*?"/g, '\"_vip_endtime":"2099-09-09"');
body = body.replace(/\"expiretime":\d+/g, '\"expiretime":4092599349');
body = body.replace(/\"expires_in":\d+/g, '\"expires_in":4092599349');
body = body.replace(/\"vip_endtime":\d+/g, '\"vip_endtime":4092599349');

$done({body});
