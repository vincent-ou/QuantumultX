/* 木工宝典 — 会员信息改写 / 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = api-wood.kaying.cc */

var obj = JSON.parse($response.body);

obj.data = {
  ...obj.data,
  "remainDay" : "999",
  "vip" : {
    "desc" : "年会员",
    "value" : "YES",
    "code" : "YES"
  }
};

$done({body : JSON.stringify(obj)});
