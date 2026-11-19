/* 少女壁纸 — 解锁订阅
 * 原作者：89996462
 * 适配版本：2.0
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = www.helloshiyu.com
 */

var body = $response.body.replace(/state":\d/g,'state":1')
.replace(/forever":\w+/g,'forever":true')
.replace(/startTime":\w+/g,'startTime":"2999-01-01"')
.replace(/expireTime":\w+/g,'expireTime":"2999-01-01"')
$done({ body });
