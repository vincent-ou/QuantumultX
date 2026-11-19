/* 才士题库 — 解锁订阅
 * 原作者：89996462
 * 适配版本：3.0.100
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = gateway-pro.caishi.cn
 */

var body=$response["body"]["replace"](/isFree":\w+/g,"isFree\":true")['replace'](/freeFlag":\d/g,"freeFlag\":0");$done({'body':body});
