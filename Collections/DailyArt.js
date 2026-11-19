/* DailyArt — 解锁会员
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = api.getdailyart.com */


var resp = JSON.parse($response.body);
const vipa = '/api/subscription/verified';
const vipb = '/api/auth/login';
const vipc = '/api/check-logged';
const vip = {
    "auto_resume_date" : null,
    "status" : "active",
    "account_type" : "patron-annual",
    "cancel_date" : null,
    "start_date" : "2023-05-22T11:37:17.000000Z",
    "expire_date" : "2099-09-09T09:09:09.000000Z"
  };

if ($request.url.indexOf(vipa) != -1){
  resp.data = (vip);
}

if ($request.url.indexOf(vipb) != -1){
  resp.user.subscription = (vip)
  resp.user.account_type = "patron-annual";
}

if ($request.url.indexOf(vipc) != -1){
  resp.subscription = (vip)
  resp.account_type = "patron-annual";
}

$done({body : JSON.stringify(resp)});
