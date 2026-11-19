/* 画涯 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.5.2
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.huaya.cc
 */

var body = $response.body.replace(/issubscribe":\w+/g,'issubscribe":true')
.replace(/promotionnumber":\d/g,'promotionnumber":1')
.replace(/prohibitstate":\d/g,'prohibitstate":1')
.replace(/vipday":\d/g,'vipday":1')

$done({ body });
