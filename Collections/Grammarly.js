/* Grammarly — 订阅解锁 / 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = *.grammarly.com */

let vip = JSON.parse($response.body);

vip.isPremium = true;
vip.description = "1-year Grammarly Subscription";
vip.title = "Annual";
vip.type =  "Premium";
vip.freemium = false;
vip.grammarlyEdu = true;
vip.free = false;
vip.institutionProofit = true;
vip.Proofit = true;
vip.isAppleSubscription = true;
vip.plagiarismOn = true;
vip.institutionProofit = true;

$done({body:JSON.stringify(vip)});
