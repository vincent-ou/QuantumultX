/* 一起练琴 — 解锁 VIP
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = api.*lianqin*.*, api.mangofuture.cn */

var body = $response.body;
function replaceInBody(regex, replacement) {
  body = body.replace(regex, replacement);
}

replaceInBody(/\"vip_last_day":null/g, '"vip_last_day":"2099-09-09"');
replaceInBody(/\"is_vip_valid":\w+/g, '"is_vip_valid":true');
replaceInBody(/\"purchased":\w+/g, '"purchased":true');
replaceInBody(/\"authenticated":\w+/g, '"authenticated":true');
replaceInBody(/\"vip_status_string":".*?"/g, '"vip_status_string":"VIP 有效期至 2099-09-09"');
replaceInBody(/\"buy_or_continue":"购买"/g, '"buy_or_continue":"续费"');
replaceInBody(/\"info_json":{    "new_red_points": {      "bind_main_teacher_remind": false    },    "student": {      "is_teacher_exist": false    }  }/g, '"info_json":{    "new_red_points": {      "bind_main_teacher_remind": false    },    "student": {      "is_teacher_exist": false    },    "vip": {      "last_day": "2099-09-09"    }  }');

$done({body});
