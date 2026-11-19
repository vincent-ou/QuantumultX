/* 闹钟 — 解锁订阅
 * 原作者：89996462
 * 适配版本：2.0.0
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = nao.ganbuguo.com
 */

var body = $response.body.replace(/uvip":"\d"/g,'uvip":"1"')
.replace(/islong":"\d"/g,'islong":"1"')
.replace(/advert":"\d"/g,'advert":"1"')
$done({ body });
