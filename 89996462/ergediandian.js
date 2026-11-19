/* 儿歌点点 — 解锁订阅
 * 原作者：89996462
 * 适配版本：3.47.0
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = gateway.ergediandian.com
 */

var body = $response.body.replace(/endtime":"\d+"/g,'endtime":"4567891456"')
.replace(/vip":\d/g,'vip":1')
.replace(/"vip_day":"\d+"/g,'"vip_day":"99999"')

.replace(/"is_vip":"0"/g,'"is_vip":"1"')
.replace(/"vip_day":"\d+"/g,'"vip_day":"99999"')
$done({ body });
