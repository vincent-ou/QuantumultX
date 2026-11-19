/* MySticker — RevenueCat 订阅解锁（单独版）
 * 原作者：afengye
 * 适配版本：3.4
 * 清理整理：Muse — 从 afengye 合集单抽，逻辑与数值与原版一致
 * 匹配：按 bundle_id 匹配
 * [rewrite_local]
 * [mitm] hostname = api.revenuecat.com, api.rc-backup.com
 */

const APP_KEY = "com.miiiao.MySticker"; // bundle_id（无 bundle_id 的 App 用 App 名匹配 UA）
const PRODUCT_ID = "com.miiiao.MySticker.lifetime";
const ENTITLEMENTS = ["mysticker premium"];
const EXPIRES = "2999-01-01T00:00:00Z";
const PURCHASE = "2021-01-01T00:00:00Z";

function headersLower(h) {
  const o = {};
  for (const k in h) o[k.toLowerCase()] = h[k];
  return o;
}

function isMatch(headers) {
  const h = headersLower(headers || {});
  const bundle = h["x-client-bundle-id"] || "";
  const ua = h["user-agent"] || "";
  if (bundle && bundle.indexOf(APP_KEY) !== -1) return true;
  if (ua && ua.toLowerCase().indexOf(APP_KEY.toLowerCase()) !== -1) return true;
  return false;
}

function hasValidEntitlement(subscriber) {
  if (!subscriber || !subscriber.entitlements) return false;
  for (const name of ENTITLEMENTS) {
    const e = subscriber.entitlements[name];
    if (!e) continue;
    // expires_date 为 null = 终身；未来日期 = 有效订阅：原样放过，不覆盖
    if (e.expires_date === null) return true;
    if (e.expires_date && new Date(e.expires_date).getTime() > Date.now()) return true;
  }
  return false;
}

if (typeof $response === "undefined") {
  // script-request-header：删 etag 头，强制 RevenueCat 返回全量订阅
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  $done({ headers: $request.headers });
} else {
  let body = null;
  try { body = JSON.parse($response.body); } catch (e) { body = null; }
  if (!body || !body.subscriber || !isMatch($request.headers) || hasValidEntitlement(body.subscriber)) {
    $done({});
  } else {
    const subscriber = body.subscriber;
    subscriber.entitlements = subscriber.entitlements || {};
    subscriber.subscriptions = subscriber.subscriptions || {};
    for (const name of ENTITLEMENTS) {
      subscriber.entitlements[name] = {
        expires_date: EXPIRES,
        grace_period_expires_date: null,
        product_identifier: PRODUCT_ID,
        purchase_date: PURCHASE
      };
    }
    subscriber.subscriptions[PRODUCT_ID] = {
      expires_date: EXPIRES,
      grace_period_expires_date: null,
      purchase_date: PURCHASE,
      original_purchase_date: PURCHASE,
      period_type: "normal",
      store: "app_store",
      is_sandbox: false,
      unsubscribe_detected_at: null,
      billing_issues_detected_at: null,
      ownership_type: "PURCHASED"
    };
    $done({ body: JSON.stringify(body) });
  }
}
