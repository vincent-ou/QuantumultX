/* 快速水印 — 会员信息改写 / 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = api-qsy.iiitool.com */

var obj = JSON.parse($response.body);

obj.data = {
  ...obj.data,
  "is_forever" : true,
  "remaining_times" : 999,
  "vip_level" : 2,
  "vip_end_time" : 4092599349,
  "annual_fee" : 1,
  "vip_start_time" : 1716859131,
  "is_vip" : true
};

$done({body : JSON.stringify(obj)});
