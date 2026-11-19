/* Pajicam — VIP 解锁
 * 原作者：89996462
 * 适配版本：未注明
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = uc.pajicam.com
 */

var body = $response.body.replace(/"vip_expire_time":\d+/g,'"vip_expire_time":9999999999999')
.replace(/"vip_show_expire_time":\d+/g,'"vip_show_expire_time":9999999999999')
.replace(/"classic_vip_expire_time":\d+/g,'"classic_vip_expire_time":9999999999999')
.replace(/"classic_vip_show_expire_time":\d+/g,'"classic_vip_show_expire_time":9999999999999')
.replace(/"svip_expire_time":\d+/g,'"svip_expire_time":9999999999999')
.replace(/"svip_show_expire_time":\d+/g,'"svip_show_expire_time":9999999999999')
.replace(/"vip_current_type":\d+/g,'"vip_current_type":2')
.replace(/"vip_current_is_trial":(true|false)/g,'"vip_current_is_trial":false')
.replace(/"vip_trial_start_time":\d+/g,'"vip_trial_start_time":1792147945465')
.replace(/"vip_trial_day":\d+/g,'"vip_trial_day":999999')
.replace(/"vip_subscribing":(true|false)/g,'"vip_subscribing":true')
.replace(/"svip_subscribing":(true|false)/g,'"svip_subscribing":true')
$done({ body });
