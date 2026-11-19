/* 元气桌面壁纸 — VIP 解锁
 * 原作者：89996462
 * 适配版本：2.91.1940
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑；身份字段改取真实返回（原版写入作者身份/推广），逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = mobile-ios-wallpaper-api.zhhainiao.com
 */

var objc = JSON.parse($response.body);
var oldInfo = (objc && objc.user_info) || null;
    objc = {
  "user_info" : {
    "uid" : 76837142,
    "user_type" : 0,
    "following_count" : 0,
    "works_mobile_download_cnt" : 0,
    "nickname" : "",
    "wx_openid" : "",
    "is_real_name_auth" : 0,
    "open_id" : "1624225033495252992",
    "works_mobile_cnt" : 0,
    "mobile_like_cnt" : 0,
    "mobile_like_static_cnt" : 0,
    "works_scan_cnt" : 0,
    "works_like_cnt" : 0,
    "follower_count" : 0,
    "user_desc" : "",
    "mobile_static_buy_wp_cnt" : 0,
    "mobile_buy_wp_cnt" : 0,
    "like_static_wp_cnt" : 0,
    "contract_user_type" : 0,
    "permission_vip_info" : [
      {
        "vip_ex_date" : 2676251736,
        "vip_type" : "13",
        "vip_start_date" : 0
      }
    ],
    "works_static_cnt" : 0,
    "works_mobile_like_cnt" : 0,
    "works_cnt" : 0,
    "avatar" : "http://newvip-cdn.zhhainiao.com/public/avatar/avatar4@2x.jpg",
    "login_user_info" : {
      "lenovo_info" : null,
      "facebook_info" : null,
      "mobile_info" : null,
      "wx_infos" : null,
      "qq_infos" : null,
      "is_tourist" : 0,
      "google_info" : null,
      "mail_info" : null,
      "apple_info" : null
    },
    "current_time" : 1676165575,
    "works_mobile_static_cnt" : 0,
    "like_wp_cnt" : 0,
    "static_buy_wp_cnt" : 0,
    "works_mobile_live_cnt" : 0,
    "works_live_cnt" : 0,
    "buy_wp_cnt" : 0,
    "works_download_cnt" : 0,
    "works_mobile_scan_cnt" : 0,
    "vip_type" : 0,
    "contract_status" : 0
  },
  "permission_vip_info" : [
    {
      "vip_ex_date" : 2676251736,
      "vip_type" : "13",
      "vip_start_date" : 0
    }
  ],
  "resp_common" : {
    "ret" : 0,
    "msg" : "ok",
    "request_id" : "63e841c7-2bf9bf3a"
  },
  "platforms" : [
    {
      "last_time" : 1676138665,
      "first_time" : 1676080400,
      "refer" : "",
      "frm" : "",
      "platform" : "ios"
    }
  ]
}

// 身份字段取真实返回，仅保留原版的 VIP 权限信息。
var vipInfo = [{ "vip_ex_date": 2676251736, "vip_type": "13", "vip_start_date": 0 }];
if (oldInfo) {
  objc.user_info = oldInfo;
  objc.user_info.permission_vip_info = vipInfo;
}
objc.permission_vip_info = vipInfo;

$done({body : JSON.stringify(objc)});
