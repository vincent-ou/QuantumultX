/* 高考必备 — 会员信息改写 / 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = api */

var obj = JSON.parse($response.body);

obj.data = {
   ...obj.data,
   "isvip" : 1,
   "is_ad_vip" : 1,
   "vip_end_time" : "2099-09-09 09:09:09"
};
$done({body : JSON.stringify(obj)});
