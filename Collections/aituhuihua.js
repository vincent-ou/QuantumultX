/* 爱涂绘画 — 解锁 VIP / 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = kkr-user.tapque.com */

var obj = JSON.parse($response.body);

obj = {
  "msg" : "处理完成",
  "records" : {
    "isVipValue" : true,
    "vipExpireDate" : "2099-09-09 09:09:09"
  },
  "code" : 6000
};

$done({body : JSON.stringify(obj)});
