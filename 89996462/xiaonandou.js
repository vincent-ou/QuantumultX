/* 小南斗 — VIP 解锁
 * 原作者：89996462
 * 适配版本：1.23.4
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = papi.xiaonandou.com.cn
 */

var objc = JSON.parse($response.body);
    objc = {
  "status" : 0,
  "message" : "success",
  "content" : {
    "isVip" : 1,
    "vipDeadline" : "9999/09/09",
    "isShow" : 1
  },
  "isTest" : 0
}

$done({body : JSON.stringify(objc)});
