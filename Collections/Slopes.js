/* Slopes — 解锁会员 / 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = my.getslopes.com */

var obj = JSON.parse($response.body);

obj.pass_expiration = 4092599349;
obj.purchases = 1;
obj.v1Owner = true;
obj.pass_ranges = [{
    "is_trial_period": false,
    "end": 4092599349,
    "subscription_origin": "apple",
    "auto_renewing": "on",
    "start": 1701704386
}];

$done({ body: JSON.stringify(obj) });