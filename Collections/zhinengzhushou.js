/* 智能助手 — 解锁 VIP
 * 原作者：chxm1023
 * 适配版本：1.0.3
 * 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = www.kaolahome.com, cat-revenuecat-qscqkotbrh.cn-hongkong.fcapp.run */

const res = {};
const obj = JSON.parse(typeof $response != "undefined" && $response.body || null);

const name = "vip";
const appid = "sageapp_777_1y";

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  res.headers = $request.headers;
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
  res.body = JSON.stringify(obj);
}

$done(res);
