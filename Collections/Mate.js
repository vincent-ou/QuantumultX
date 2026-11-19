/* Mate — 解锁会员
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = asia.gikken.co */


var resp = JSON.parse($response.body);
const xxa = '/matesync/subscription';
const xxb = '/matesync/register_user';
const xxc = '/matesync/login';
const xxd = '/matesync/check_user';
const hyxx = {
  "next_bill_date" : "2099-09-09",
  "next_payment_amount" : "0",
  "paused_from" : null,
  "billing_period" : "lifetime",
  "cancel_url" : "itms-apps://apps.apple.com/account/subscriptions",
  "isSubscriptionVerified" : true,
  "unit_price" : "0",
  "old_status" : null,
  "update_url" : "itms-apps://apps.apple.com/account/subscriptions",
  "isLifetime" : true,
  "cancellation_effective_date" : "2099-09-09",
  "currency" : "CNY",
  "status" : "active",
  "endsOn" : "2099-09-09"
};

if ($request.url.indexOf(xxa) != -1){
resp = (hyxx);}

if ($request.url.indexOf(xxb) != -1){
resp.subscriptionInfo = (hyxx);}

if ($request.url.indexOf(xxc) != -1){
resp.subscriptionInfo = (hyxx);}

if ($request.url.indexOf(xxd) != -1){
resp = {
  "registered" : true
};}

$done({body : JSON.stringify(resp)});
