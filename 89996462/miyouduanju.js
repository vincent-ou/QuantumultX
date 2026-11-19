/* 蜜柚短剧 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.0.7
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.duoyolo.cn
 */

var body = $response.body.replace(/memberStatus":\w+/g,'memberStatus":true')
.replace(/expDate":\w+/g,'expDate":"2999-09-09 09:09:09"')
$done({ body });
