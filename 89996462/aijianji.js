/* 爱剪辑 — 解锁订阅
 * 原作者：89996462
 * 适配版本：2.8.0
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.open.loveclip.site
 */

var body = $response.body.replace(/IsVip":\w+/g,'IsVip":true')
.replace(/VipLevel":\d+/g,'VipLevel":1')
.replace(/IsFree":\w+/g,'IsFree":true')
.replace(/VipExpire":".*?"/g,'VipExpire":"9999-09-09 00:00:00"')
.replace(/LastActivityTime":".*?"/g,'LastActivityTime":"9999-09-09 00:00:00"')

$done({ body });
