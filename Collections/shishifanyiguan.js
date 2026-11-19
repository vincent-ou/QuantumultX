/* 实时翻译官 — 会员信息改写
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = new */

var obj = JSON.parse($response.body);

obj.data = {
  ...obj.data,
  "status" : 1,
  "expire_time" : "9999-12-30 00:00:00",
  "is_member" : 2,
  "cart_num" : 999999
};

$done({body : JSON.stringify(obj)});
