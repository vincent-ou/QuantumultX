/* 小时尚 — 解锁会员 / 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = kongque.twan.cn */


var resp = JSON.parse($response.body);

resp = {
  "berry" : 3,
  "isValid" : 2,
  "berryEnd" : "2099-09-09 09:09:09"
};

$done({body : JSON.stringify(resp)});
