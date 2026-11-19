/* LinearityCurve — RevenueCat 订阅解锁 / 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = *.linearity.io */

const obj = {};
const ddm = JSON.parse(typeof $response != "undefined" && $response.body || null);

const name = "pro";
const appid = "linearity_curve_pro_yearly_free_trial";

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  obj.headers = $request.headers;
} else if (ddm && ddm.subscriber) {
  ddm.subscriber.subscriptions = ddm.subscriber.subscriptions || {};
  ddm.subscriber.entitlements = ddm.subscriber.entitlements || {};
  const data = {
    "product_identifier": (appid),
    "expires_date" : "2099-09-09T09:09:09Z",
    "purchase_date": "2025-09-09T09:09:09Z"
  };
  ddm.subscriber.entitlements[(name)] = (data);
  ddm.subscriber.subscriptions[(appid)] = {  ...data,	"original_purchase_date": "2025-09-09T09:09:09Z",	"store": "app_store",	"ownership_type": "PURCHASED"};
  obj.body = JSON.stringify(ddm);
}

$done(obj);
