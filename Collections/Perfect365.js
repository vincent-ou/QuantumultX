/* Perfect365 — 订阅解锁
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = service.perfect365.com */

var obj = JSON.parse($response.body);

if (obj && obj.data && obj.data.subscribing === false) {
  obj.data = {
    ...obj.data,
    "yearlyConversion": true,
    "eligible": true,
    "productId": "subscription_yearly",
    "expireTime": "4092599349000",
    "subscribing": true
  };
}

$done({ body: JSON.stringify(obj) });
