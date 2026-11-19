/* DaYuDuanJu — 解锁订阅
 * 原作者：89996462
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = xkld.kunpengtn.com
 */

var body = $response.body.replace(/membershipStatus":\d+/g,'membershipStatus":1')
.replace(/membershipExpiryTime":"[0-9\-: ]+"/g,'membershipExpiryTime":"9999-12-31 23:59:59"')
.replace(/membershipForeverStatus":\d+/g,'membershipForeverStatus":1')
.replace(/goldCoinBalance":\d+/g,'goldCoinBalance":999999')
.replace(/hasPurchasedMembership":\d+/g,'hasPurchasedMembership":1')
.replace(/accountStatus":\d+/g,'accountStatus":1')
$done({ body });
