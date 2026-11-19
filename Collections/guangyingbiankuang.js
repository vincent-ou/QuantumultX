/* 光影边框 — 会员信息改写 / 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = prod.dengziwl.com */

var obj = JSON.parse($response.body);

obj.result = {
  ...obj.result,
  "expireDate": "2099-09-09",
  "type": {
    "name": "PAID",
    "display": "付费会员"
  },
  "limitedTimeFree": false
};

$done({body : JSON.stringify(obj)});
