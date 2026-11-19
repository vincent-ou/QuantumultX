/* 人人视频 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.7
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.hujuvod.com
 */

var body = $response.body.replace(/level":"\d+"/g,'level":"1"')
.replace(/expiredTime":\d+/g,'expiredTime":4090470693000')
.replace(/valid":\w+/g,'valid":true')
$done({ body });
