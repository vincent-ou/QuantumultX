/* 视频舞蹈秀 — 解锁订阅
 * 原作者：89996462
 * 适配版本：131.1
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.jumirui.com
 */

var body = $response.body.replace(/isVip":\w+/g,'isVip":true')
.replace(/expirationTime":\d+/g,'expirationTime":8888888888')
$done({ body });
