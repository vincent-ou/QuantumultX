/* 工地记工 — 解锁订阅
 * 原作者：89996462
 * 适配版本：4.9.8
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = app.cdmgkj.cn
 */

var body = $response.body.replace(/status":\d/g,'status":1')
.replace(/expire_time":".*?"/g,'expire_time":"2099-09-09"')
$done({ body });
