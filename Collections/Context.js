/* Context — RevenueCat 订阅解锁（plus，context_1y，年付，到期 2099-09-09） / 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = rc.visionarytech.ltd */

const ddm = {};
const obj = JSON.parse(typeof $response != "undefined" && $response.body || null);
const name = "plus";
const appid = "context_1y";

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  ddm.headers = $request.headers;
} else if (obj && obj.subscriber) {
  obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
  obj.subscriber.entitlements = obj.subscriber.entitlements || {};
  const data = {
	"product_identifier": (appid),
	"expires_date": "2099-09-09T09:09:09Z",
	"purchase_date": "2022-09-09T09:09:09Z"
	};
  obj.subscriber.entitlements[(name)] = (data);
  obj.subscriber.subscriptions[(appid)] = {  ...data,	"warning": "仅供学习，禁止转载或售卖",	"original_purchase_date": "2022-09-09T09:09:09Z",	"store": "app_store",	"ownership_type": "PURCHASED"};
  ddm.body = JSON.stringify(obj);
}

$done(ddm);
