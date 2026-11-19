/* Hyperweb — 解锁会员 / 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = zy6kcqa01a.execute-api.us-east-2.amazonaws.com */

var obj = JSON.parse($response.body);

obj = {
  "autoRenewStatus" : "1",
  "isActive" : true,
  "expireDateMs" : 4092599349000,
  "expirationIntent" : null,
  "productId" : "ai.laso.ios.HyperWeb.yearly.subscription"
};

$done({body : JSON.stringify(obj)});