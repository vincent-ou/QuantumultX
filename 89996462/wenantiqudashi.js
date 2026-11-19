/* 文案提取大师 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.1.1
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = jianzhibao1688.cn
 */

var body = $response.body.replace(/vipTime":\w+/g,'vipTime":8888888888000')
.replace(/vipState":\d/g,'vipState":1')
.replace(/gender":\d/g,'gender":1')
.replace(/vipDay":\w+/g,'vipDay":9999')
$done({ body });
