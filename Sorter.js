/* Sorter — 相册整理终身解锁
清理整理：Muse — 拦截苹果 buy.itunes.apple.com/verifyReceipt，仅对 Sorter（PhotosSorter）改写收据，注入终身内购 sorter.pro.ipa，到期 2099-09-09；其它 App 原样放行。
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
  // 只改写 Sorter 的收据，其它 App 原样放行
  if (!/PhotosSorter/i.test(ua) && !/PhotosSorter/i.test(bundleId)) {
    $done({});
    return;
  }

  var EXPIRE = "2099-09-09 09:09:09 Etc/GMT";
  var EXPIRE_PST = "2099-09-09 09:09:09 America/Los_Angeles";
  var EXPIRE_MS = "4092628149000";
  var PURCHASE = "2025-09-09 09:09:09 Etc/GMT";
  var PURCHASE_PST = "2025-09-09 09:09:09 America/Los_Angeles";
  var PURCHASE_MS = "1757408949000";
  var TXN = "49000" + String(Math.floor(Math.random() * 10000000000)).padStart(10, "0");

  var entry = {
    quantity: "1",
    product_id: "sorter.pro.ipa",
    transaction_id: TXN,
    original_transaction_id: TXN,
    purchase_date: PURCHASE,
    purchase_date_ms: PURCHASE_MS,
    purchase_date_pst: PURCHASE_PST,
    original_purchase_date: PURCHASE,
    original_purchase_date_ms: PURCHASE_MS,
    original_purchase_date_pst: PURCHASE_PST,
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
  obj.pending_renewal_info = [{
    product_id: "sorter.pro.ipa",
    original_transaction_id: TXN,
    auto_renew_product_id: "sorter.pro.ipa",
    auto_renew_status: "1"
  }];
  // 伪造 latest_receipt（base64），与原版做法一致
  var seed = "Sorter" + Date.now() + "_" + Math.random();
  obj.latest_receipt = btoa(seed + seed);
  obj.status = 0;

  $done({ body: JSON.stringify(obj) });
})();
