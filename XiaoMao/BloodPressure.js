/* BloodPressure — BloodPressure 终身订阅解锁（Adapty）
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.adapty.io
 */
let names="BloodPressure";let productId="prodex_bloodpressure_lifetime_free";let bundleId="blood.pressure.tracker.monitor.bp.log";let productType="premium";let appVersion=null;let obj=JSON.parse($response.body);let $=new Env(names);let sub={attributes:{app_id:"dddddddd-dddd-dddd-dddd-dddddddddddd",profile_id:"66666666-6666-6666-6666-666666666666",is_test_user:false,segment_hash:"eeeeeeeeeeeeeeee",timestamp:1722815769633,apple_validation_result:{environment:"Production",revision:"1722815767000_282222222222222_4",appAppleId:6499583794,transactions:[{productId:productId,storefront:"USA",appAccountToken:null,originalTransactionId:"282222222222222",isUpgraded:false,expiresDate:null,offerDiscountType:null,type:"Non-Consumable",subscriptionGroupIdentifier:null,purchaseDate:"2024-08-04T23:56:07Z",price:0,transactionId:"282222222222222",offerType:null,offerIdentifier:null,revocationDate:null,revocationReason:null,currency:"USD",inAppOwnershipType:"PURCHASED",originalPurchaseDate:"2024-08-04T23:56:07Z",},],hasMore:false,bundleId:bundleId,},non_subscriptions:null,promotional_offer_eligibility:false,custom_attributes:{},customer_user_id:null,introductory_offer_eligibility:true,subscriptions:{},total_revenue_usd:0,paid_access_levels:{},},};sub.attributes.subscriptions[productId]={vendor_transaction_id:"282222222222222",offer_id:null,billing_issue_detected_at:null,is_lifetime:true,store:"app_store",vendor_product_id:productId,vendor_original_transaction_id:"282222222222222",will_renew:false,renewed_at:"2024-08-04T23:56:07.000000+0000",cancellation_reason:null,active_promotional_offer_id:null,active_promotional_offer_type:null,unsubscribed_at:null,is_active:true,activated_at:"2024-08-04T23:56:07.000000+0000",is_refund:false,is_in_grace_period:false,active_introductory_offer_type:null,expires_at:null,starts_at:null,base_plan_id:null,is_sandbox:false,};sub.attributes.paid_access_levels[productType]={vendor_transaction_id:"282222222222222",offer_id:null,billing_issue_detected_at:null,is_lifetime:true,store:"app_store",vendor_product_id:productId,cancellation_reason:null,will_renew:false,renewed_at:"2024-08-04T23:56:07.000000+0000",vendor_original_transaction_id:"282222222222222",active_promotional_offer_id:null,active_promotional_offer_type:null,unsubscribed_at:null,id:productType,is_active:true,activated_at:"2024-08-04T23:56:07.000000+0000",is_refund:false,is_in_grace_period:false,active_introductory_offer_type:null,expires_at:null,starts_at:null,base_plan_id:null,};obj.data.attributes=sub.attributes;$.notify("XiaoMao_"+names+" 执行成功！","","Nice!已解锁成功，可关掉此脚本。","");$done({body:JSON.stringify(obj)});

function Env(name) {
  const read = (key) => $prefs.valueForKey(key);
  const write = (key, value) => $prefs.setValueForKey(key, value);
  const notify = (title = "", subtitle = "", message = "", url = "") => {
    if (url) $notify(title, subtitle, message, { "open-url": url });
    else $notify(title, subtitle, message);
  };
  const get = (option, callback) => {
    if (typeof option === "string") option = { url: option };
    option.method = "GET";
    $task.fetch(option).then((resp) => callback(null, { status: resp.statusCode, statusCode: resp.statusCode, headers: resp.headers, body: resp.body }, resp.body)).catch((e) => callback(e, {}, null));
  };
  const post = (option, callback) => {
    if (typeof option === "string") option = { url: option };
    option.method = "POST";
    $task.fetch(option).then((resp) => callback(null, { status: resp.statusCode, statusCode: resp.statusCode, headers: resp.headers, body: resp.body }, resp.body)).catch((e) => callback(e, {}, null));
  };
  const put = (option, callback) => {
    if (typeof option === "string") option = { url: option };
    option.method = "PUT";
    $task.fetch(option).then((resp) => callback(null, { status: resp.statusCode, statusCode: resp.statusCode, headers: resp.headers, body: resp.body }, resp.body)).catch((e) => callback(e, {}, null));
  };
  const msg = (title = "", subtitle = "", message = "", url = "") => {
    if (url) $notify(title, subtitle, message, { "open-url": url });
    else $notify(title, subtitle, message);
  };
  const isQuanX = () => true;
  const isSurge = () => false;
  const isLoon = () => false;
  const isNode = () => false;
  const toObj = (str) => JSON.parse(str);
  const toStr = (obj) => JSON.stringify(obj);
  const queryStr = (obj) => Object.keys(obj).map((key) => `${key}=${obj[key]}`).join("&");
  const log = (message) => console.log(message);
  const done = (value = {}) => $done(value);
  return { name, read, write, notify, msg, get, post, put, toObj, toStr, queryStr, log, done, isQuanX, isSurge, isLoon, isNode };
}
