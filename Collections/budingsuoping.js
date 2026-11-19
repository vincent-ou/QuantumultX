/* 布丁锁屏 — 解锁会员
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = screen-lock.*.com */


var resp = JSON.parse($response.body);
const _orig = (resp.data && typeof resp.data === "object") ? resp.data : {};

resp.data = {
  "exchangeCodeGetTime" : null,
  "id" : (_orig.id || ""),
  "newVipStatus" : 2,
  "endTime" : 2099-09-09,
  "expireDate" : 4092599349,
  "vipStatus" : 1,
  "sign" : (_orig.sign || ""),
  "nickName" : (_orig.nickName || ""),
  "exchangeCode" : null
};

$done({body : JSON.stringify(resp)});
