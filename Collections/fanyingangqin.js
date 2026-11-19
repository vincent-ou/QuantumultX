/* 凡音钢琴 — 解锁 VIP / 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = gzfanyin.com */

var obj = JSON.parse($response.body);

obj.data = { 
   ...obj.data,
   memberRole: 1,
   vipEndDate: "2099-09-09 09:09:09",
   isAdmin: "Y",
   vipGrade: 3
};

$done({body : JSON.stringify(obj)});