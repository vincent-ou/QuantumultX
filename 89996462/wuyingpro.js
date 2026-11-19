/* 无影pro — 解锁订阅
 * 原作者：89996462
 * 适配版本：5.1.4
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = vip.deliocr.cn
 */

var body = $response.body.replace(/isvip":\d+/g,'isvip":1')
.replace(/isSuperVip":\d/g,'isSuperVip":1')
.replace(/superVipBeginTime":\d+/g,'superVipBeginTime":8888888888')
.replace(/superVipEndTime":\d+/g,'superVipEndTime":8888888888')
.replace(/FreeMaxNum":\d+/g,'FreeMaxNum":8888')

$done({ body });
