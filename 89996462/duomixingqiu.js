/* 哆咪星球 — 哆咪星球—无限刷礼物
 * 原作者：89996462
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = voicechat.enlargemagic.com
 */

var body = $response.body.replace(/coin":\d+/g,'coin":999999')
.replace(/score":\d+/g,'score":999999')
.replace(/deci_score":\d+/g,'deci_score":999999')
.replace(/code":\d/g,'code":0')
$done({ body });
