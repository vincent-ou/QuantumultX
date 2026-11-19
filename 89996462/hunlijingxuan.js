/* 婚礼精选 — 付费内容
 * 原作者：89996462
 * 适配版本：8.0.4
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = www.lovewith.me
 */

var body=$response["body"]["replace"](/"vip_expire":0/g,"\"vip_expire\":4567891235")["replace"](/"untried":true/g,"\"untried\":false")['replace'](/"is_admin":0/g,"\"is_admin\":1")["replace"](/"vip":0/g,"\"vip\":1");$done({'body':body});
