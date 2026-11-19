/* 来电啦 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.0.222
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = 39.108.85.85:17012
 */

var body=$response["body"]['replace'](/"memberStatus":false/g,"\"memberStatus\":true")["replace"](/"memberType":0/g,"\"memberType\":5")["replace"](/"expireTime":null/g,"\"expireTime\":4675298604000")["replace"](/"startTime":null/g,"\"startTime\":1675298604000");$done({'body':body});
