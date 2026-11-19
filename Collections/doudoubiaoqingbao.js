/* 逗逗表情包 — 会员信息改写
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = www.dbbqb.com */

var obj = JSON.parse($response.body);
const user = /(refresh\/token|login|sms\/register)/;
const vip = /user\/expire/;
const vipjl = /orderForm/;

if(user.test($request.url)){
  obj.score = "999";
  obj.vip = "true";
  obj.vipExpireDate = "2099-09-09";
}

if(vip.test($request.url)){
  obj = {
    "score" : "999",
    "expire" : "2099-09-09 09:09:09"
  };
}

if(vipjl.test($request.url)){
  obj= [{
    "amount" : 1,
    "status" : "已完成",
    "score" : 999,
    "createDate" : "2099-09-09 09:09:09",
    "name" : "终身体验"
  }];
}

$done({body : JSON.stringify(obj)});
