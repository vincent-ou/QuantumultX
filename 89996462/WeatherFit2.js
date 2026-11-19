/* Weather Fit — RevenueCat 订阅解锁
 * 原作者：89996462
 * 适配版本：6.8.3
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.revenuecat.com
 */

const anni = {};
const anni1 = JSON.parse(typeof $response != "undefined" && $response.body || null);

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  anni.headers = $request.headers;
} else if (anni1 && anni1.subscriber) {
  anni1.subscriber.subscriptions = anni1.subscriber.subscriptions || {};
  anni1.subscriber.entitlements = anni1.subscriber.entitlements || {};

  const data = {
    "expires_date": "2099-12-31T12:00:00Z",
    "original_purchase_date": "2022-11-18T03:57:16Z",
    "purchase_date": "2022-06-15T12:00:00Z",
    "ownership_type": "PURCHASED",
    "store": "app_store"
  };

  anni1.subscriber.subscriptions["com.antonchuiko.wthrd.premium_yearly"] = data;
  anni1.subscriber.entitlements["Pro"] = JSON.parse(JSON.stringify(data));
  anni1.subscriber.entitlements["Pro"].product_identifier = "com.antonchuiko.wthrd.premium_yearly";

  anni.body = JSON.stringify(anni1);
}

$done(anni);
