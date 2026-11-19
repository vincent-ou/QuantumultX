/* AdGuard — 解锁会员 / 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = mobile-api.adguard.org */


var resp = JSON.parse($response.body);

resp = {"products":[{"premium_status":"ACTIVE","product_id":"com.adguard.lifetimePurchase"}]};

$done({body : JSON.stringify(resp)});
