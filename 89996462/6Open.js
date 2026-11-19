/* 6Open — 功能
 * 原作者：89996462
 * 适配版本：2.4
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.6pen.art
 */

var body=$response["body"]["replace"](/vip":\d/g,"vip\":1")["replace"](/expired_at":null/g,"expired_at\":\"9999-11-19 16:18:25\"")["replace"](/remains":\d/g,"remains\":9999")["replace"](/false/g,'true');$done({'body':body});
