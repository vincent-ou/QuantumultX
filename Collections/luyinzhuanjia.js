/* 录音专家 — 解锁会员
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = luyintu.cushuikeji.cn */

var obj = JSON.parse($response.body);
const user = /tuv2\.user\/info/;
const scxx = /tuv2\.order\/comboDuration/;
const ad = /tuv2\.home\/activityAlert/;

if(user.test($request.url)){
  obj.result = {
    ...obj.result,
    "vip_end_time" : 4092599349,
    "vip_try" : 1,
    "is_give_call_duration" : 36000006,
    "call_duration" : 36000006,
    "record_surplus_duration" : 36000006,
    "hours_left" : 36000006,
    "is_vip" : 1,
    "shers" : 99,
    "surplus_duration" : 36000006,
    "vip_hours" : 36000006,
    "volume_total" : 582540000000,
    "permanent_vip" : 1,
    "vip_grade" : 1,
    "enabled" : 1,
    "vip_type" : 1,
  };
}

if(scxx.test($request.url)){
  obj.result.duration = {
    "vip_duration" : 36000006,
    "total_surplus_duration" : 36000006,
    "vip_surplus_duration" : 36000006,
    "user_duration" : 36000006,
    "buy_surplus_duration" : 36000006
  };
}

if(ad.test($request.url)){
  obj.result = [];
}

$done({body : JSON.stringify(obj)});