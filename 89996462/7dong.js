/* 7Dong — 解锁订阅
 * 原作者：89996462
 * 适配版本：4.7.8
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = pc7dong.com
 */

var body=$response["body"]["replace"](/"joinLearing":false/g,"\"joinLearing\":true")["replace"](/"isView":"N"/g,'\x22isView\x22:\x22Y\x22')["replace"](/"isBuy":"N"/g,"\"isBuy\":\"Y\"");$done({'body':body});
