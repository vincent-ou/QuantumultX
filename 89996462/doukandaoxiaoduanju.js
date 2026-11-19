/* 抖看到小短剧 — VIP 解锁
 * 原作者：89996462
 * 适配版本：2.6.0
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = mv-ps.xdplt.com
 */

var objc = JSON.parse($response.body);
    objc = {
  "message" : {
    "code" : 200,
    "serverTime" : 1733924690381,
    "messageInfo" : "H20000"
  },
  "result" : {
    "unsign" : 1,
    "agreementNo" : "000001899416154",
    "isTrialPeriod" : false,
    "eventToken" : null,
    "expiresDate" : 8888888888000,
    "isVip" : 1,
    "skuType" : null
  }
}

$done({body : JSON.stringify(objc)});
