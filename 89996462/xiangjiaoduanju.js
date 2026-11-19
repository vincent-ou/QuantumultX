/* XiangJiaoDuanJu — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.1.5.6
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = 8.149.129.124
 */

var objc = JSON.parse($response.body);
    objc = {
  "phoneNumber" : "",
  "testerExpiresAt" : "2000-01-01T00:00:00Z",
  "email" : "",
  "createdAt" : "2025-03-04T14:43:05.591981Z",
  "balance" : 9999,
  "vipExpiresAt" : "9999-09-09T00:00:00Z"
}
$done({body : JSON.stringify(objc)});
