/* 海豚记账本 — 解锁订阅
 * 原作者：89996462
 * 适配版本：3.5.1
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = book.haitunwallet.com
 */

var objc = JSON.parse($response.body);
    objc = {
 "data": {
  "level": 2,
  "status": 1,
  "openTime": "9999-12-12",
  "startTime": "9999-12-12",
  "endTime": "9999-12-12",
  "shareToken": ""
 },
 "code": 0,
 "msg": "返回成功"
};
$done({body : JSON.stringify(objc)});
