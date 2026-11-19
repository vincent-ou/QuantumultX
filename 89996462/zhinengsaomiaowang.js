/* 智能扫描王 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.4
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = iosznsmw.lmscanner.sanwubeixin.cn
 */

var body = $response.body.replace(/isVip":\w+/g,'isVip":true')
.replace(/vip_time":\d+/g,'vip_time":8888888888')
.replace(/vip_type":\d+/g,'vip_type":1')

$done({ body });
