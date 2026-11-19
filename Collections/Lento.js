/* Lento — 会员信息改写
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = lentoapp.com */

var obj = JSON.parse($response.body);
const isQuanX = typeof $task !== "undefined";

obj = {
  "meta" : {
    "message" : "获取作者信息成功",
    "code" : 200
  },
  "data" : {
    "paytype" : 1,
    "expiretime" : "null"
  }
};

$done({status: isQuanX ? "HTTP/1.1 200 OK" : 200, body: JSON.stringify(obj)});
