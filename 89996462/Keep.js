/* Keep — 解锁订阅
 * 原作者：89996462
 * 适配版本：7.36.0
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息（变量名仍为还原后的 _0x 命名），逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.gotokeep.com
 */

body=$response["body"]["replace"](/\"memberStatus":\d+/g,"\"memberStatus\":1")["replace"](/\"buttonText":".*?"/g,"\"buttonText\":\"已永久\"")["replace"](/\"hasPaid\":\w+/g,"\"hasPaid\":true")["replace"](/\"downLoadAll\":\w+/g,"\"downLoadAll\":true")["replace"](/\"videoTime\":\d+/g,'\x22videoTime\x22:3000')["replace"](/\"startEnable\":\w+/g,"\"startEnable\":true")["replace"](/\"memberStatus\":\d+/g,"\"memberStatus\":1")["replace"](/\"preview\":\w+/g,"\"preview\":true")["replace"](/\"errorCode\":\d+/g,"\"errorCode\":0")["replace"](/\"status\":\w+/g,'\x22status\x22:true');var _0x1337d8={};_0x1337d8["body"]=body;$done(_0x1337d8);
