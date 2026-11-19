/* 微商截图秀 — 微商截图秀
 * 原作者：89996462
 * 适配版本：3.8.9
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = weimage.keephu.com
 */

var body = $response.body.replace(/vip":\d/g,'vip":1')
.replace(/show_vip":\d/g,'show_vip":0')
.replace(/expire":".*?"/g,'expire":"9999-01-01 08:00:00"')
$done({ body });
