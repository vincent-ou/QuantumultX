/* 汇中考 — 汇中考
 * 原作者：89996462
 * 适配版本：2.1.2
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息（变量名仍为还原后的 _0x 命名），逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = www.zhongkao66.com
 */

var _0x3cb3c1=$response["body"]["replace"](/"isvip":0/g,"\"isvip\":1")["replace"](/"viptype":\d/g,"\"viptype\":2")['replace'](/"viptime":".*?"/g,"\"viptime\":\"2099-10-01\"");var _0x1daa69={};_0x1daa69["body"]=_0x3cb3c1;$done(_0x1daa69);
