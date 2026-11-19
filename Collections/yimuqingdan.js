/* 一木清单 — 会员信息改写
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = yimutodo.com */

var obj = JSON.parse($response.body);

obj.data = {
  ...obj.data,
  "memberType" : "YEAR",
  "memberExpiredTime" : 4092599349000,
  "class" : "com.tian.OneWoodList.year.48"
};
obj.data.openInfos.class = "com.tian.OneWoodList.year.48";

$done({body : JSON.stringify(obj)});
