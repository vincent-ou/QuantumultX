/* Codye — RevenueCat 订阅解锁
 * 原作者：89996462
 * 适配版本：1.1.4
 * 清理整理：Muse — 按原版权益与产品重写为本地模板，移除原版作者推广与写死的用户 ID，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.revenuecat.com
 */

(function () {
  var ENTITLEMENT = "pro";
  var PRODUCT_ID = "com.roadesign.Codyeapp.proupgrade";
  var EXPIRES = "9999-09-09T09:09:09Z";

  var headers = $request.headers || {};
  var ua = headers['User-Agent'] || headers['user-agent'] || '';
  var bundleId = headers['X-Client-Bundle-ID'] || headers['x-client-bundle-id'] || '';

  if (typeof $response === 'undefined') {
    delete headers['x-revenuecat-etag'];
    delete headers['X-RevenueCat-ETag'];
    $done({ headers: headers });
    return;
  }

  var obj;
  try {
    obj = JSON.parse($response.body || '{}');
  } catch (e) {
    $done({});
    return;
  }

  var subscriber = obj.subscriber;
  if (!subscriber) {
    $done({});
    return;
  }

  // 已有真实有效订阅时不覆盖。
  var existing = subscriber.entitlements && subscriber.entitlements[ENTITLEMENT];
  if (existing && existing.expires_date) {
    var exp = new Date(existing.expires_date).getTime();
    if (!isNaN(exp) && exp > Date.now()) {
      $done({});
      return;
    }
  }

  var now = new Date().toISOString();
  subscriber.entitlements = subscriber.entitlements || {};
  subscriber.subscriptions = subscriber.subscriptions || {};

  subscriber.entitlements[ENTITLEMENT] = {
    expires_date: EXPIRES,
    grace_period_expires_date: null,
    product_identifier: PRODUCT_ID,
    purchase_date: now
  };

  subscriber.subscriptions[PRODUCT_ID] = {
    expires_date: EXPIRES,
    grace_period_expires_date: null,
    purchase_date: now,
    original_purchase_date: now,
    period_type: 'normal',
    store: 'app_store',
    is_sandbox: false,
    unsubscribe_detected_at: null,
    billing_issues_detected_at: null,
    ownership_type: 'PURCHASED'
  };

  $done({ body: JSON.stringify(obj) });
})();
