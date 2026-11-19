/* Trancy — 会员信息改写 / 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = api.trancy.org */

var obj = JSON.parse($response.body);

obj.data = {
   ...obj.data,
   "expireAt" : 4092599349000,
   "createdAt" : 1717291137217,
   "premium" : true,
   "subscription" : 1
}

$done({body : JSON.stringify(obj)});
