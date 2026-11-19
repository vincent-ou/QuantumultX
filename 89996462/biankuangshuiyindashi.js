/* 边框水印大师 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.6.7
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = photoby.hasmash.com
 */

var body = $response.body.replace(/isVip":\d+/g,'isVip":1')
.replace(/is_ios_product":\w+/g,'is_ios_product":true').replace(/memberExpire":\d+/g,'memberExpire":8888888888')
$done({ body });
