/* 阿布睡前故事 — 阿布睡前故事
 * 原作者：89996462
 * 适配版本：1.2.9
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = tutugushiapi.tutuerge.com
 */

var body = $response.body.replace(/"isvip":"false"/g,'"isvip":"true"')
.replace(/"PayVip":\d/g,'"PayVip":1')
.replace(/"PayVipExpDate":".*?"/g,'"PayVipExpDate":"2032/9/30"')
.replace(/"PayVipResidueSeconds":\d+/g,'"PayVipResidueSeconds":9999999999')
.replace(/"ExpirationTimestamp":\d+/g,'"ExpirationTimestamp":1964683735')
.replace(/"ExpirationTimestamp1":\d+/g,'"ExpirationTimestamp1":1961918431')
$done({ body });
