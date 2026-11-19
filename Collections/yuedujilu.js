/* 阅读记录 — 会员信息改写
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = app.yidiansz.com */

var obj = JSON.parse($response.body);
const user = /app\/user\/info/;
const ad = /banner/;

if(user.test($request.url)){
  obj.data = {
    ...obj.data,
    "end_date" : "2099-09-09 09:09:09",
    "expires_date_s" : 4092599349000,
    "has_perpetual_vip" : 1,
    "member_type" : 4,
    "member_status" : 1
  };
}

if(ad.test($request.url)){
  obj = {};
}

$done({body : JSON.stringify(obj)});
