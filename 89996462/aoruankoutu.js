/* 傲软抠图 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.6.0
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = *.aoscdn.com, *.apsapp.cn
 */

var ojbk = JSON.parse($response.body);
const vipa = '/base/vip/client/authorizations';
const vipb = '/vips';


if ($request.url.indexOf(vipa) != -1){
  ojbk.data.is_activated = 1;
  ojbk.data.remain_days = 999999999;
  ojbk.data.expire_time = "2099-09-09 09:09:09";
  ojbk.data.expired_at = 4092600296;
  ojbk.data.license_type = "premium";
  ojbk.data.durations = 999999999;
  ojbk.data.vip_special = 1;
}

if ($request.url.indexOf(vipb) != -1){
  ojbk.data = {
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
    "coin" : 100
  };
}

$done({body : JSON.stringify(ojbk)});
