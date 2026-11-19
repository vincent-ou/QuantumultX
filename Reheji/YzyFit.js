/* YzyFit — RevenueCat 订阅解锁（单独版）
 * 清理整理：Muse — 从 ddgksf2013 RevenueCat 映射单抽YzyFit，权益与产品与映射一致
 * 权益 pro，产品 yzyfit_lft_v2（年付），到期日 2099-09-09
 * 只处理 User-Agent 或 Bundle ID 含 YzyFit 的请求（YzyFit），不影响其他 App
 * 已有真实有效订阅时不覆盖（以服务器返回为准）
 * [rewrite_local]
 * [mitm] hostname = api.revenuecat.com, api.rc-backup.com
 */

(function () {
  var APP_KEY = 'YzyFit';
  var ENTITLEMENT = 'pro';
  var PRODUCT_ID = 'yzyfit_lft_v2';
  var EXPIRES = '2099-09-09T09:09:09Z';

  var headers = $request.headers || {};
  var ua = headers['User-Agent'] || headers['user-agent'] || '';
  var bundleId = headers['X-Client-Bundle-ID'] || headers['x-client-bundle-id'] || '';

  // 不是YzyFit的请求，原样放过。
  if (ua.indexOf(APP_KEY) === -1 && bundleId.indexOf(APP_KEY) === -1) {
    $done({});
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
