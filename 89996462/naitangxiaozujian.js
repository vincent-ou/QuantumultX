/* 乃糖小组件 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.1.9
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息（变量名仍为还原后的 _0x 命名），逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = awvp.aoscdn.com
 */

body=$response["body"]["replace"](/\"is_activated":\d/g,"\"is_activated\":1")["replace"](/\"expired_at":\d+/g,"\"expired_at\":253395492741")['replace'](/\"expire_time":".*?"/g,"\"expire_time\":\"9999-01-01 00:00:00\"");var _0x35fd77={};_0x35fd77["body"]=body;$done(_0x35fd77);
