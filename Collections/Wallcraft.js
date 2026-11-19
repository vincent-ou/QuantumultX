/* Wallcraft — 解锁会员
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = billing-ios.wallpaperscraft.com */


let resp = JSON.parse($response.body), id = "com.wallpaperscraft.wallpapers.year.1.5baks";

if(/verify_receipt\/remove_ads/.test($request.url)){
  resp.items["all_time"] = {
    "type" : "nonconsumable",
    "is_active" : true
  };
  resp.items[id] = {
    "type" : "subscription",
    "already_used_introductory_price" : false,
    "is_active" : true
  };
}

if(/products\/remove_ads/.test($request.url)){
  resp = {
    "items" : {
      "nonconsumables" : [
        "all_time"
      ],
      "subscriptions" : [
        id
      ]
    }
  };
}

$done({body : JSON.stringify(resp)});
