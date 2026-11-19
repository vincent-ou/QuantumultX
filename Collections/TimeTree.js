/* TimeTree — 解锁订阅
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = api.timetreeapp.com */

let obj = {};
try {
  obj = JSON.parse($response.body || "{}");
} catch (e) {}
const isQX = typeof $task != "undefined";

if (
  obj.user_subscription &&
  obj.user_subscription.current_subscription &&
  obj.user_subscription.current_subscription.status === 1
) {
  console.log("⛔️检测到已存在有效订阅，脚本停止运行！");
  $done({});
}

const data = {
  "status" : 1,
  "subscription_token" : "490001314520000",
  "auto_renewal" : true,
  "cancelled" : false,
  "platform" : 1,
  "platform_status" : "ACTIVE",
  "expire_at" : 4092599349000,
  "plan" : 1,
  "in_trial" : false
};

obj.user_subscription = obj.user_subscription || {};
obj.user_subscription.current_subscription = data;

obj.user_subscription.trial_used ??= true;
obj.user_subscription.user_id ??= 66666666;
obj.user_subscription.uuid ??= "00000000-a001-b002-c003-d00000000004";

if (isQX) { obj = "HTTP/1.1 200 OK";} else {obj = 200;}

$done({status: (obj), headers: $response.headers, body : JSON.stringify(obj)});