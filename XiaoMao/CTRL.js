/* CTRL — CTRL 终身订阅解锁（Adapty）
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.adapty.io
 */
let status=isJSON($response.body);let requestUrl=$request.url;let names="CTRL";let $=new Env(names);var obj=status?JSON.parse(removeExtraSpaces($response.body)):$response.body;if(/^https:\/\/api\.adapty\.io\/api\/v1\/sdk\/purchase\/app-store\/original-transaction-id\/validate?/.test(requestUrl)){obj={data:{type:"adapty_purchase_app_store_original_transaction_id_validation_result",id:"44444444-4444-4444-4444-444444444444",attributes:{app_id:"44444444-4444-4444-4444-444444444444",profile_id:"44444444-4444-4444-4444-444444444444",apple_validation_result:{environment:"Production",revision:"1000000000000_200000000000000_3",appAppleId:6499311651,transactions:[{productId:"com.smart_tv_control_remote.lifetime_0",storefront:"USA",appAccountToken:null,originalTransactionId:"280000000000000",isUpgraded:false,expiresDate:null,offerDiscountType:null,type:"Non-Consumable",subscriptionGroupIdentifier:null,purchaseDate:"2024-01-10T11:11:11Z",price:0,transactionId:"280000000000000",offerType:null,offerIdentifier:null,revocationDate:null,revocationReason:null,currency:"USD",inAppOwnershipType:"PURCHASED",originalPurchaseDate:"2024-01-10T11:11:11Z",},],hasMore:false,bundleId:"com.smart-soultions.tv-remote-control",},segment_hash:"3333333333333333",timestamp:new Date().getTime(),promotional_offer_eligibility:false,non_subscriptions:null,custom_attributes:{},customer_user_id:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",introductory_offer_eligibility:true,subscriptions:{"com.smart_tv_control_remote.lifetime_0":{vendor_transaction_id:"280000000000000",offer_id:null,billing_issue_detected_at:null,is_lifetime:true,store:"app_store",vendor_product_id:"com.smart_tv_control_remote.lifetime_0",vendor_original_transaction_id:"280000000000000",will_renew:false,renewed_at:"2024-01-10T11:11:11.000000+0000",cancellation_reason:null,active_promotional_offer_id:null,active_promotional_offer_type:null,unsubscribed_at:null,is_active:true,activated_at:"2024-01-10T11:11:11.000000+0000",is_refund:false,is_in_grace_period:false,active_introductory_offer_type:null,expires_at:null,starts_at:null,base_plan_id:null,is_sandbox:false,},},total_revenue_usd:0,paid_access_levels:{premium:{offer_id:null,billing_issue_detected_at:null,is_lifetime:true,store:"app_store",vendor_product_id:"com.smart_tv_control_remote.lifetime_0",cancellation_reason:null,will_renew:false,renewed_at:"2024-01-10T11:11:11.000000+0000",active_promotional_offer_id:null,active_promotional_offer_type:null,unsubscribed_at:null,id:"premium",is_active:true,activated_at:"2024-01-10T11:11:11.000000+0000",is_refund:false,is_in_grace_period:false,active_introductory_offer_type:null,expires_at:null,starts_at:null,base_plan_id:null,},},},},}}$.notify("XiaoMao_"+names+" 执行成功！","","Nice!已解锁成功，可关掉此脚本。","");$done({body:status?JSON.stringify(obj):obj});function isJSON(str){try{JSON.parse(str)}catch(e){return false}return true}function removeExtraSpaces(jsonString){var jsonObj=JSON.parse(jsonString);return JSON.stringify(jsonObj,function(key,value){if(typeof value==="string"){return value.trim()}return value})}

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
