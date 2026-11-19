/* 安心记加班 — 解锁订阅
 * 原作者：89996462
 * 适配版本：5.1.00
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = market-gateway.julanling.com
 */

var objc = JSON.parse($response.body);
    objc = {
  "errorCode" : 0,
  "results" : {
    "functionVipStatusMap" : {
      "VIP" : {
        "vipStatus" : "VIP",
        "willExpireDays" : 99999,
        "axUid" : 187654321,
        "expireTimestamp" : 4092599349,
        "hasExpiredDays" : 0,
        "expireTime" : "2099-09-09 09:09:09"
      },
      "ADVERT_VIP" : {
        "vipStatus" : "VIP",
        "willExpireDays" : 99999,
        "axUid" : 187654321,
        "expireTimestamp" : 4092599349,
        "hasExpiredDays" : 0,
        "expireTime" : "2099-09-09 09:09:09"
      }
    }
  },
  "errorStr" : null,
  "token" : null
}

$done({body : JSON.stringify(objc)});
