/* 万能变声器 — 解锁会员
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = www.40sishi.com */


body = $response.body.replace(/\"forever":\w+/g, '\"forever":true').replace(/\"expireTime":\d+/g, '\"expireTime":4092599349').replace(/\"state":\d+/g, '\"state":1');

$done({body});
