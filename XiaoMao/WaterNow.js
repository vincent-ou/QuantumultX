/* WaterNow — WaterNow 终身订阅解锁（Qonversion）
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.qonversion.io
 */
let names="WaterNow";let productName="lifetime";let productType="com.shababhsiddique.waternow.lifetime";let appVersion=null;let notifyState=true;let ua=true;let obj=JSON.parse($response.body);let $=new Env(names);obj.user_products=[{id:productName,type:2,store_id:productType,duration:null,},];obj.permissions=[{id:"premium",last_purchase_timestamp:1724872707,active:1,started_timestamp:1724872707,grant_type:"purchase",associated_product:productName,source:"appstore",renews_count:0,store_transactions:[{environment:"production",original_transaction_id:"280000000000000",ownership_type:"owner",transaction_id:"280002000000000",transaction_timestamp:1724872707,type:"non_consumable_purchase",},],first_purchase_timestamp:1724872707,current_period_type:null,expiration_timestamp:null,renew_state:-1,},];$.notify("XiaoMao_"+names+" 执行成功！","","Nice!已解锁成功，可关掉此脚本。","");$done({body:JSON.stringify(obj)});

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
