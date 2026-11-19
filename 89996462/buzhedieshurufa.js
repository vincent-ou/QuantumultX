/* 不折叠输入法 — 解锁订阅
 * 原作者：89996462
 * 适配版本：2.5.5
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.keyboard.buzhedie.com
 */

var body=$response['body']["replace"](/"is_vip":false/g,"\"is_vip\":true")["replace"](/"vip_time":".*?"/g,"\"vip_time\":\"2999-11-11\"");$done({'body':body});
