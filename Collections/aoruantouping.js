/* 傲软投屏 — 解锁会员
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = *.aoscdn.com, *.apsapp.cn */


var resp = JSON.parse($response.body);
const vipa = '/base/vip/client/authorizations';
const vipb = '/vips';


if ($request.url.indexOf(vipa) != -1){
  resp.data.is_activated = 1;
  resp.data.remain_days = 999999999;
  resp.data.expire_time = "2099-09-09 09:09:09";
  resp.data.expired_at = 4092600296;
  resp.data.license_type = "premium";
  resp.data.durations = 999999999;
  resp.data.vip_special = 1;
}

if ($request.url.indexOf(vipb) != -1){
  resp.data = {
    "group_expired_at" : 0,
    "is_tried" : 0,
    "max_devices" : 1,
    "period_type" : "active",
    "candy_expired_at" : 0,
    "pending" : 0,
    "remained_seconds" : 0,
    "limit" : 0,
    "expired_at" : 4092600296,
    "candy" : 0,
    "license_type" : "premium",
    "quota" : 999999999,
    "status" : 1,
    "vip_special" : 1,
    "coin" : 9999
  };
}

$done({body : JSON.stringify(resp)});
