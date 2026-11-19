/* 三维地图探索 — 解锁订阅
 * 原作者：89996462
 * 适配版本：v1.2.7
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = map.kky888.cn
 */

var body = $response.body.replace(/is_vip":\w+/g,'is_vip":true')
.replace(/vipFlag":"\d+"/g,'vipFlag":"1"')
.replace(/vipTime":".*?"/g,'vipTime":"2099-09-09 09:09:09"')


$done({ body });
