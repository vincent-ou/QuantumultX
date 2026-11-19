/* ShuiYinXiangJi — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.0.1
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = supercamera.yifanxinmei.com
 */

var body = $response.body.replace(/vip":\d/g,'vip":1')
.replace(/vip_expire_time":\d+/g,'vip_expire_time":8888888888000')

$done({ body });
