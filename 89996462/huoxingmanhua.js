/* 火星漫画 — 内容
 * 原作者：89996462
 * 适配版本：1.2.2
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = appapi.pipimanhua.cc
 */

var body=$response["body"]["replace"](/"isvip":\d/g,"\"isvip\":2")["replace"](/"xcoin":\d/g,"\"xcoin\":1")['replace'](/"status":1/g,"\"status\":0");$done({'body':body});
