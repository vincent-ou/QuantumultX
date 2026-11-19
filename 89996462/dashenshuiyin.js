/* 大神水印 — 解锁订阅
 * 原作者：89996462
 * 适配版本：2.7.4
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = mars.inout.top
 */

var body = $response.body.replace(/vip_expire_time": \w+/g,'vip_expire_time": 4076744128000')
.replace(/is_lifetime_membership": \w+/g,'is_lifetime_membership": true')
$done({ body });
