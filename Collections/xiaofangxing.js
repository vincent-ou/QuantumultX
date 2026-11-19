/* 消防行 — 解锁会员
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = www.xfx119.com */

var obj = JSON.parse($response.body);

obj = {...obj,
  "llkcValidityDays" : 4092599349,
  "tkValidityDays" : 4092599349,
  "validityDays" : 4092599349,
  "fgjxjvValidityDays" : 4092599349,
  "studySubsystem" : "2099-09-09 09:09:09"
}

$done({body : JSON.stringify(obj)});
