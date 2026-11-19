/* ReceiptiX — RevenueCat 终身订阅解锁
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广、通知图片与 Env 冗余代码，逻辑与数值与原版一致
 * 权益 basic，产品 apple.basic.lifetime（终身），到期 null
 * 只处理 User-Agent 或 Bundle ID 含 ReceiptiX 的请求，不影响其他 App
 * 已有真实有效订阅时不覆盖（以服务器返回为准）
 * [rewrite_local]
 * [mitm] hostname = api.revenuecat.com, api.rc-backup.com
 */

(function () {
  var APP_KEY = "ReceiptiX";
  var ENTITLEMENTS = ["basic"];
  var PRODUCT_ID = "apple.basic.lifetime";
  var EXPIRES = null;

  var headers = $request.headers || {};
  var ua = headers['User-Agent'] || headers['user-agent'] || '';
  var bundleId = headers['X-Client-Bundle-ID'] || headers['x-client-bundle-id'] || '';

  // 不是本 App 的请求，原样放过。
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
  var existing;
  for (var i = 0; i < ENTITLEMENTS.length; i++) {
    existing = subscriber.entitlements && subscriber.entitlements[ENTITLEMENTS[i]];
    if (existing && existing.expires_date) {
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

  for (var j = 0; j < ENTITLEMENTS.length; j++) {
    subscriber.entitlements[ENTITLEMENTS[j]] = {
      expires_date: EXPIRES,
      grace_period_expires_date: null,
      product_identifier: PRODUCT_ID,
      purchase_date: now
    };
  }

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
