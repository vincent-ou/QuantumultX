/* 格志日记 — 解锁订阅
 * 原作者：89996462
 * 适配版本：3.2.1
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息（变量名仍为还原后的 _0x 命名），逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = diary-id.sumi.io
 */

body=$response["body"]['replace'](/\"membership_status":".*?"/g,"\"membership_status\":\"premium\"")["replace"](/\"expires_at":null/g,"\"expires_at\":\"9999-11-25T01:29:27.000000\"");var _0x82c482={};_0x82c482["body"]=body;$done(_0x82c482);
