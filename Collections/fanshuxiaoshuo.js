/* 番薯小说 — 解锁会员 / 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = ggs.manmeng168.com */


body = $response.body.replace(/\"vip":\w+/g, '\"vip":true').replace(/\"vip_end_time":\d+/g, '\"vip_end_time":4092599349000');

$done({body});
