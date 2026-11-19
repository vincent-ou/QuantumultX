/* 题库大全 — 题库大全合集解锁
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = iosapi.yueshuian.com, question.tiku.cqxcj.top, base.cmoe.top, yyapi.yayingtk.com, learn.cqrry.com, api.sryx.net, api.meigit.com, question.api.anjiazui.com, app.bftk.com.cn, question.civil.shaoeyy.com */

var obj = JSON.parse($response.body);
const vipa = /(common|front\/customer)/;
const vipb = /vip\/getValidTime/;

if(vipa.test($request.url)){
  obj.data = {
   ...obj.data,
   isVip: true,
   vipDueDate: 4092599349,
   vipDueDateStr: "2099-09-09 09:09:09",
   vipMonth: 1
  };
}

if(vipb.test($request.url)){
  obj.VaildEndTime = "2099-09-09 09:09:09";
  obj.Status = 1;
}

$done({body : JSON.stringify(obj)});