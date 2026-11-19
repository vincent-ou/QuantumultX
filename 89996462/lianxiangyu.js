/* 恋相遇 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.3.2
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = (ms.51wnl-cq.com|lxy.51wnl-cq.com)
 */

var body = $response.body.replace(/vipStatus":\d/g,'vipStatus":1')
.replace(/endTime":\w+/g,'endTime":2099')
.replace(/newVipStatus":\d/g,'newVipStatus":1')
.replace(/expireDate":\w+/g,'expireDate":2099')
.replace(/freeFlag":\d/g,'freeFlag":1')
.replace(/vipStartTime":\w+/g,'vipStartTime":8888888888000')
.replace(/vipEndTime":\w+/g,'vipEndTime":8888888888000')
.replace(/musicFlag":\d/g,'musicFlag":1')

$done({ body });
