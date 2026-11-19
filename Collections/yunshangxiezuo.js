/* 云上写作 — 会员信息改写
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = www.yunshangxiezuo.com */

var obj = JSON.parse($response.body);

obj.data.user = {
  ...obj.data.user,
  "vip" : 1,
  "vip_forever" : 1,
  "vip_last" : "2099-09-09 09:09:09"
};

$done({body : JSON.stringify(obj)});
