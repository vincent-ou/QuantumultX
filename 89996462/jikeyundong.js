/* 即刻运动 — 解锁订阅
 * 原作者：89996462
 * 适配版本：3.4.3
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息（变量名仍为还原后的 _0x 命名），逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = ec.myjkyd.com
 */

body=$response["body"]["replace"](/\"limitType":\d/g,"\"limitType\":1")["replace"](/\"purchaseStatus":\d/g,'\x22purchaseStatus\x22:1');var _0x1a2daf={};_0x1a2daf["body"]=body;$done(_0x1a2daf);
