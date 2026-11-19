/* 悟饭触悦 — VIP 解锁
 * 原作者：89996462
 * 适配版本：1.0.4
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = iosv2.cjapi.5fun.com
 */

var objc = JSON.parse($response.body);

    objc = {
  "error" : 0,
  "data" : {
    "user_info" : {
      "reg_time" : "1666761382",
      "expired_time" : 0,
      "member_state" : 0,
      "is_vip" : "9A0684792021D73BE42B71491469ADFA"
    },
    "error_code" : "",
    "data_info" : [

    ],
    "is_success" : true,
    "error_msg" : ""
  }
}

$done({body : JSON.stringify(objc)});
