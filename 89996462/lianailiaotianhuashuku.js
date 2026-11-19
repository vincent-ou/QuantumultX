/* 恋爱聊天话术库 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.1.6
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = chat.zyhd02.cn
 */

var body = $response.body.replace(/"isTry":\d/g,'"isTry":1')
.replace(/"isFree":\d/g,'"isFree":1')
.replace(/"unlockType":\d/g,'"unlockType":1')
.replace(/"vipTime":""/g,'"vipTime":"2999-11-11"')
.replace(/"vipIsValid":\d/g,'"vipIsValid":1')
.replace(/"vipText":".*?"/g,'"vipText":"有效期至:2999-11-11"')
.replace(/"freeSearchCount":"\d+"/g,'"freeSearchCount":"9999"')
.replace(/"isShowAd":"1"/g,'"isShowAd":"0"')
$done({ body });
