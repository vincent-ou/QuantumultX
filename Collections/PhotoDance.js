/* PhotoDance — 会员信息改写 / 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = viart-api.afunapp.com */

var obj = JSON.parse($response.body);

obj.data = {
  ...obj.data,
  "vip_remain_time" : 4092599349,
  "vip_type" : 1,
  "vip_year" : 1
},

$done({body : JSON.stringify(obj)});
