/* 如期 — 解锁会员
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = www.freshhome.top */


body = $response.body.replace(/\"isVip":"\d+"/g, '\"isVip":"1"').replace(/\"vipType":\w+/g, '\"vipType":true').replace(/\"vipEndTime":(.*?)/g, '\"vipEndTime":4092599350000');

$done({body});
