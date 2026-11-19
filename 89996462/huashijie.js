/* 画世界 — 画世界
 * 原作者：89996462
 * 适配版本：2.5.1
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = app.huashijie.art
 */

var body=$response["body"]["replace"](/level":\d+/g,"level\":10")["replace"](/vipExpireTime":""/g,"vipExpireTime\":\"9999-01-29 20:34:55\"")["replace"](/vipLevel":\d+/g,"vipLevel\":10")["replace"](/vipId":\d+/g,"vipId\":3");$done({'body':body});
