/* HabitDone — RevenueCat 订阅解锁（终身）
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广、通知图片链接与 Env 兼容层，混淆代码还原为明文模板，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.revenuecat.com, api.rc-backup.com
 */

(function () {
  var APP_KEYS = ["habitdone"];
  var ENTITLEMENTS = ["pro"];
  var PRODUCT_ID = "Lifetime";

  var headers = $request.headers || {};
  var ua = (headers['User-Agent'] || headers['user-agent'] || '').toLowerCase();
  var bundleId = (headers['X-Client-Bundle-ID'] || headers['x-client-bundle-id'] || '').toLowerCase();

  // 不是本 App 的请求，原样放过。
  var matched = APP_KEYS.some(function (k) { return ua.indexOf(k) !== -1 || bundleId.indexOf(k) !== -1; });
  if (!matched) {
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

  var now = new Date().toISOString();
  subscriber.entitlements = subscriber.entitlements || {};
  subscriber.subscriptions = subscriber.subscriptions || {};
  subscriber.non_subscriptions = subscriber.non_subscriptions || {};

  ENTITLEMENTS.forEach(function (ent) {
    // 已有真实有效订阅时不覆盖。
    var existing = subscriber.entitlements[ent];
    if (existing && existing.expires_date) {
      var exp = new Date(existing.expires_date).getTime();
      if (!isNaN(exp) && exp > Date.now()) {
        return;
      }
    }
    subscriber.entitlements[ent] = {
      expires_date: null,
      grace_period_expires_date: null,
      product_identifier: PRODUCT_ID,
      purchase_date: now
    };
  });

  subscriber.subscriptions[PRODUCT_ID] = {
    expires_date: null,
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

  subscriber.non_subscriptions[PRODUCT_ID] = [{
    id: 'aaaaaaaaaa',
    is_sandbox: false,
    purchase_date: now,
    original_purchase_date: now,
    store: 'app_store',
    store_transaction_id: '280000000000000'
  }];

  $done({ body: JSON.stringify(obj) });
})();
