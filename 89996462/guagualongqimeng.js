/* 瓜瓜龙启蒙 — 解锁订阅
 * 原作者：89996462
 * 适配版本：7.9.0
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = www-lf.ggl.cn
 */

var body=$response["body"]["replace"](/sub_title":".*?"/g,'sub_title\x22:\x22有效期至9999.07.28\x22')['replace'](/free_vip_status":\d+/g,'free_vip_status\x22:2')["replace"](/normal_vip_status":\d/g,"normal_vip_status\":1")["replace"](/vip_status_description":".*?"/g,"vip_status_description\":\"VIP会员有效期至 9999.07.28\"")["replace"](/has_vip_tag":\w+/g,"has_vip_tag\":false");$done({'body':body});
