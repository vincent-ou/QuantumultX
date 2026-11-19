/* K米 — 解锁订阅
 * 原作者：89996462
 * 适配版本：5.5.3
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = mobile.ktvme.com
 */

var body = $response.body.replace(/userviptype":"\d"/g,'userviptype":"1"')
.replace(/uservipexpiretime":"\d+"/g,'uservipexpiretime":"8888888888000"')
.replace(/status":"\d"/g,'status":"1"')

$done({ body });
