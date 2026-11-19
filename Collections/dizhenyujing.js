/* 地震预警 — 会员信息改写
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = mobile-new.chinaeew.cn */

var obj = JSON.parse($response.body);

obj = {
  "message" : "查询成功",
  "data" : {
    "endTime" : 4092599349000
  },
  "code" : 0
};

$done({body : JSON.stringify(obj)});
