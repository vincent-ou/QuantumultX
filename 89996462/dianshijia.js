/* 电视家 — 解锁订阅
 * 原作者：89996462
 * 适配版本：2.2.3
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息（变量名仍为还原后的 _0x 命名），逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = 123.56.125.184
 */

var _0x793aa2=$response["body"]['replace'](/"tagInfo":"npay"/g,"\"tagInfo\":\"pay\"")["replace"](/"exclusiveTime":\d+/g,"\"exclusiveTime\":1966949696000")['replace'](/"getCoin":\d+/g,'\x22getCoin\x22:99999999')["replace"](/"adEquityTime":\d+/g,"\"adEquityTime\":1966949696000")["replace"](/equityTime":\d+/g,"equityTime\":1966949696000");var _0x52f0af={};_0x52f0af["body"]=_0x793aa2;$done(_0x52f0af);
