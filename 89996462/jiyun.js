/* 集云 — RevenueCat 订阅解锁；权益 Premium，产品 com.xiaobingkj.Cloud.Pro
 * 原作者：89996462
 * 适配版本：2.0.1
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.revenuecat.com
 */

const out = {};
const resp = JSON.parse(typeof $response != "undefined" && $response.body || null);

const name = "Premium";
const appid = "com.xiaobingkj.Cloud.Pro";

  
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];

  out.headers = $request.headers;
} else if (resp && resp.subscriber) {
  data = {
    "expires_date": "9999-09-09T09:09:09Z",
    "original_purchase_date": "2023-02-23T02:33:33Z",
    "purchase_date": "2023-02-23T02:33:33Z",
    "ownership_type": "PURCHASED",
    "store": "app_store"
  };

  resp.subscriber.subscriptions[(appid)] = data
  resp.subscriber.entitlements[(name)] = JSON.parse(JSON.stringify(data));
  resp.subscriber.entitlements[(name)].product_identifier = (appid);
  out.body = JSON.stringify(resp);
}

$done(out);
