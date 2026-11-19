/* Spin the Wheel — Spin the Wheel 终身解锁（iTunes 收据）
 * 原作者：小帽
 * 适配版本：23
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = buy.itunes.apple.com
 */
let names="Spin the Wheel";let productName="com.Spin.The.Wheel.Random.Picker.decision.maker";let productType="com.Spin.The.Wheel.Random.Picker.decision.maker.lifetime.";let appVersion="23";let notifyState=true;let ua=false;let obj=JSON.parse($response.body);let requestUrl=$request.url;let $=new Env(names);if(/^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt?/.test(requestUrl)&&(ua?$request.headers["User-Agent"].includes(names):true)){let receipt={receipt_type:"Production",bundle_id:productName,in_app:[{quantity:"1",transaction_id:"666666666666667",original_transaction_id:"666666666666667",product_id:productType,in_app_ownership_type:"PURCHASED",purchase_date:"2024-04-14 15:27:40 Etc/GMT",purchase_date_ms:"1691972860000",purchase_date_pst:"2024-04-14 08:27:40 America/Los_Angeles",original_purchase_date:"2024-04-14 08:24:40 Etc/GMT",original_purchase_date_ms:"1692026680000",original_purchase_date_pst:"2024-04-14 08:24:40 America/Los_Angeles",expires_date:"2222-02-02 02:02:02 Etc/GMT",expires_date_pst:"2222-02-02 02:02:02 America/Los_Angeles",expires_date_ms:"7955085722000",},],adam_id:1111111111,receipt_creation_date_pst:"2024-04-14 08:25:04 America/Los_Angeles",request_date:"2024-04-14 15:27:40 Etc/GMT",request_date_pst:"2024-04-14 08:27:40 America/Los_Angeles",version_external_identifier:666666666,request_date_ms:"1692026860531",original_purchase_date_pst:"2024-04-14 08:24:40 America/Los_Angeles",application_version:appVersion,original_purchase_date_ms:"1692026680000",receipt_creation_date_ms:"1691972704000",original_application_version:appVersion,download_id:666666666666666666,latest_receipt_info:[{quantity:"1",transaction_id:"666666666666667",original_transaction_id:"666666666666667",product_id:productType,in_app_ownership_type:"PURCHASED",is_in_intro_offer_period:"false",is_trial_period:"false",purchase_date:"2024-04-14 15:27:40 Etc/GMT",purchase_date_ms:"1691972860000",purchase_date_pst:"2024-04-14 08:27:40 America/Los_Angeles",original_purchase_date:"2024-04-14 08:24:40 Etc/GMT",original_purchase_date_ms:"1692026680000",original_purchase_date_pst:"2024-04-14 08:24:40 America/Los_Angeles",expires_date:"2222-02-02 02:02:02 Etc/GMT",expires_date_pst:"2222-02-02 02:02:02 America/Los_Angeles",expires_date_ms:"7955085722000",},],pending_renewal_info:[{product_id:productName,original_transaction_id:"666666666666667",auto_renew_product_id:productType,auto_renew_status:"1",},],status:0,environment:"Production",};obj.latest_receipt_info=receipt.latest_receipt_info;obj.latest_receipt="";obj.pending_renewal_info=receipt.pending_renewal_info;obj.receipt=receipt;if(notifyState){$.notify("XiaoMao_"+names+" 执行成功！","","Nice!已解锁成功，可关掉此脚本。","")}}$done({body:JSON.stringify(obj)});

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
