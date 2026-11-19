/* 小熊壁纸大全 — 会员信息改写 / 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = wallpaper */

var body = $response.body;

body = body.replace(/\"isVip":\w+/g, '\"isVip":true');
body = body.replace(/\"data":"\d+"/g, '\"data":"99"');
body = body.replace(/\"is_vip":\d+/g, '\"is_vip":1');
body = body.replace(/\"expired_date":"(.*?)"/g, '\"expired_date":"2099-09-09 09:09:09"');

$done({ body });
