/* 听书助手 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.6.7
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = www.huojiwangluo.cn
 */

var body = $response.body.replace(/vip_state":\d+/g,'vip_state":1')
.replace(/vip_expire":\d+/g,'vip_expire":8888888888')
$done({ body });
