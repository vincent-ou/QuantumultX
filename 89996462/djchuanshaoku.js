/* DJChuanShaoKu — 解锁订阅
 * 原作者：89996462
 * 适配版本：v2.0
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = csj.yy-5.com
 */

var body = $response.body.replace(/isvip":\w+/g,'isvip":true')
.replace(/expiretime":\d+/g,'expiretime":8888888888')
.replace(/viptype":\d/g,'viptype":1')
.replace(/hasvipcode":\w+/g,'hasvipcode":true')
$done({ body });
