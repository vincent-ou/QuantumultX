/* 日语趣配音 — VIP 解锁
 * 原作者：89996462
 * 适配版本：1.7.1
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = japaneselar.qupeiyin.com
 */

var body = $response.body.replace(/is_svip":"\d/g,'is_svip":"1')
.replace(/is_vip":"\d/g,'is_vip":"1')
.replace(/user_type":"\d+"/g,'user_type":"1"')
.replace(/is_evaluate":\d+/g,'is_evaluate":1')
.replace(/endtime":"0"/g,'endtime":"9999999999"')
.replace(/is_unlock":"1"/g,'is_unlock":"0"')
.replace(/new_user":1/g,'new_user":0')
.replace(/identity":"\d"/g,'identity":"1"')
.replace(/school_identity":"\d"/g,'school_identity":"1"')
.replace(/vip":"\d"/g,'vip":"1"')
.replace(/level":"\d"/g,'level":"1"')
.replace(/endtime":""/g,'endtime":"9999999999"')
.replace(/is_vip_avatar":\d/g,'is_vip_avatar":1')
.replace(/is_vip_month":"\d"/g,'is_vip_month":"1"')
.replace(/app_type":"\d"/g,'app_type":"2"')
.replace(/type":"\d"/g,'type":"2"')
.replace(/vip_text":".*?"/g,'vip_text":"SVIP会员已开通"')
.replace(/vip_button_text":".*?"/g,'vip_button_text":"已永久"')
$done({ body });
