/* 美颜相机 — 解锁会员
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = *.meiyan.com */


var resp = JSON.parse($response.body);
const hysj = '/vip/user_info';
const user = '/user/show';
const hymb = '/vip/user_center';

if ($request.url.indexOf(hysj) != -1){
resp.response.status = 1;
resp.response.ad_vip_type = 3;
resp.response.expire_time = "2099-09-09 09:09:09";
resp.response.type = 2;
resp.response.product_type = 1;
resp.response.expire_date = "2099-09-09";
}

if ($request.url.indexOf(user) != -1){
resp.data.vip_type = 1;
resp.data.vip_icon = "https://xximg1.meitudata.com/6948531818264286440.png";
resp.data.follower_count = 999000;
resp.data.fan_count = 999000;
resp.data.favorites_count = 999000;
resp.data.be_like_count = 999000;
}

if ($request.url.indexOf(hymb) != -1){
resp.response.user_info = {
      "status" : 1,
      "period_type" : 11,
      "discount_status" : 0,
      "agreement_status" : 1,
      "product_type" : 1,
      "expire_date" : "2099-09-09"
    };
}

$done({body : JSON.stringify(resp)});
