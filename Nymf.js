/* NYMF — 艺术照片 Premium 年付解锁
清理整理：Muse — 拦截苹果 buy.itunes.apple.com/verifyReceipt，仅对 NYMF（com.nymf.app）改写收据，注入年付产品 com.nymf.app.premium_year，到期 2099-09-09；其它 App 原样放行。
原作者：chxm1023
适配版本：2.1.2
[rewrite_local]
[mitm] hostname = buy.itunes.apple.com */

(function () {
  var body = $response.body;
  var obj = null;
  try {
    obj = JSON.parse(body);
  } catch (e) {
    $done({});
    return;
  }
  if (!obj || !obj.receipt) {
    $done({});
    return;
  }

  var ua = ($request.headers && ($request.headers["User-Agent"] || $request.headers["user-agent"])) || "";
  var bundleId = obj.receipt.bundle_id || obj.receipt.Bundle_Id || "";
  // 只改写 NYMF 的收据，其它 App 原样放行
  if (!/nymf/i.test(ua) && !/nymf/i.test(bundleId)) {
    $done({});
    return;
  }

  var EXPIRE = "2099-09-09 09:09:09 Etc/GMT";
  var EXPIRE_PST = "2099-09-09 02:09:09 America/Los_Angeles";
  var EXPIRE_MS = "4092628149000";
  var PURCHASE = "2025-09-09 09:09:09 Etc/GMT";
  var PURCHASE_PST = "2025-09-09 02:09:09 America/Los_Angeles";
  var PURCHASE_MS = "1757408949000";
  var ORIGINAL = "2025-09-09 09:09:08 Etc/GMT";
  var ORIGINAL_PST = "2025-09-09 02:09:08 America/Los_Angeles";
  var ORIGINAL_MS = "1757408948000";

  // 年付 Premium（与 iTunes.js 清单条目 NYMF 一致：tp timea / hx hxpda）
  var txn = "49000" + String(Math.floor(Math.random() * 10000000000)).padStart(10, "0");
  var entry = {
    quantity: "1",
    product_id: "com.nymf.app.premium_year",
    transaction_id: txn,
    original_transaction_id: txn,
    purchase_date: PURCHASE,
    purchase_date_ms: PURCHASE_MS,
    purchase_date_pst: PURCHASE_PST,
    original_purchase_date: ORIGINAL,
    original_purchase_date_ms: ORIGINAL_MS,
    original_purchase_date_pst: ORIGINAL_PST,
    expires_date: EXPIRE,
    expires_date_ms: EXPIRE_MS,
    expires_date_pst: EXPIRE_PST,
    is_trial_period: "false",
    is_in_intro_offer_period: "false",
    in_app_ownership_type: "PURCHASED",
    web_order_line_item_id: "1000000" + String(Math.floor(Math.random() * 10000000000)).padStart(10, "0")
  };

  obj.receipt.in_app = [entry];
  obj.latest_receipt_info = [entry];
  obj.pending_renewal_info = [
    {
      product_id: "com.nymf.app.premium_year",
      original_transaction_id: txn,
      auto_renew_product_id: "com.nymf.app.premium_year",
      auto_renew_status: "1"
    }
  ];
  // 伪造 latest_receipt（base64），与 iTunes.js 做法一致
  var seed = "receipt_" + Date.now() + "_" + Math.random();
  obj.latest_receipt = btoa(seed + seed);
  obj.status = 0;

  $done({ body: JSON.stringify(obj) });
})();
