/* 文案生成器 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.3.9
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.assistantwriter.top
 */

var body = $response.body.replace(/vip_end_time":\d+/g,'vip_end_time":8888888888')
.replace(/is_vip":\d/g,'is_vip":1')
.replace(/vip_type":\d/g,'vip_type":1')
$done({ body });
