/* 猫头鹰文件管理 — 解锁会员 / 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = www.skyjos.cn */


body = $response.body.replace(/\"memberLevel":(.*?)/g, '\"memberLevel":3').replace(/\"succ":"(.*?)"/g, '\"succ":"true"').replace(/\"expireAt":"(.*?)"/g, '\"expireAt":"4092599349000"')

$done({body});
