/* 墨迹天气 — 解锁会员、去广告
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = *.api.moji.com */

var obj = JSON.parse($response.body);
const vip1 = '/sns/json/profile/get_info';
const vip2 = '/json/member_new/homepage_info';
const vip3 = '/user/personal/json/profile';
const vip4 = '/flycard/novice';
const AD1 = '/shortvideo';

if ($request.url.indexOf(vip1) != -1){
  obj.is_vip = 1;
  obj.type = 7;
  obj.grade = 1;
  obj.is_adver_free = 0;
  obj.expire_time = 4092599349000;
  obj.member_type = 1;
  obj.member_level = 1;
  obj.max_expiration_days = 9999999;
  obj.is_expire = 0;
  obj.remain_day = 9999999;
  obj.inkrity = 9999999;
  obj.status = 1;
  obj.is_purchase = true;
}

if ($request.url.indexOf(vip2) != -1){
  obj.userTips = ["将在2099-09-09到期"];
  obj.user_tips = ["将在2099-09-09到期"];
  obj.is_member = true; 
  obj.user_member_info.vip = 1;
  obj.user_member_info.is_auto_member = 1;
}

if ($request.url.indexOf(vip3) != -1){
  obj.personal_profile.inkrity = 9999999;
  obj.personal_profile.is_vip = true;
  obj.personal_profile.grade = 1;
  obj.personal_profile.user_flag = true;
}

if ($request.url.indexOf(vip4) != -1){
  obj.data.novice.adShow= 0;
  obj.data.novice.expireTime = 4092599349000;
  obj.data.novice.vipShow = 1;
}

if ($request.url.indexOf(AD1) != -1){
  obj.item_list = [];
  obj.rcmList = [];
  obj.add_card_list = [];
}

$done({body : JSON.stringify(obj)});
