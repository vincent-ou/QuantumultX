/* Stock股票图表 — RevenueCat 订阅解锁（单独版）
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 从 RevenueCat 合集中单抽Stock股票图表，权益与产品与合集一致
 * 权益 Premium，产品 stocks_lifetime_premium（终身），到期日 终身
 * 只处理 User-Agent 或 Bundle ID 含 StockPlus 的请求（Stock股票图表），不影响其他 App
 * 已有真实有效订阅时不覆盖（以服务器返回为准）
 * [rewrite_local]
 * [mitm] hostname = api.revenuecat.com, api.rc-backup.com
 */

(function () {
  var APP_KEY = 'StockPlus';
  var ENTITLEMENT = 'Premium';
  var PRODUCT_ID = 'stocks_lifetime_premium';
  var EXPIRES = null; // 终身，不过期

  var headers = $request.headers || {};
  var ua = headers['User-Agent'] || headers['user-agent'] || '';
  var bundleId = headers['X-Client-Bundle-ID'] || headers['x-client-bundle-id'] || '';

  // 不是Stock股票图表的请求，原样放过。
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

  // 已有真实有效订阅时不覆盖（终身 null 或未到期的日期都算有效）。
  var existing = subscriber.entitlements && subscriber.entitlements[ENTITLEMENT];
  if (existing) {
    if (existing.expires_date === null) {
      $done({});
      return;
    }
    if (existing.expires_date) {
      var exp = new Date(existing.expires_date).getTime();
      if (!isNaN(exp) && exp > Date.now()) {
        $done({});
        return;
      }
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
