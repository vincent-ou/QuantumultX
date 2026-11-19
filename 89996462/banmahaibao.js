/* 斑马海报 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.2.0
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息（变量名仍为还原后的 _0x 命名），逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = zebra.maka.im
 */

body=$response["body"]["replace"](/\"is_lifelong_vip":\w+/g,"\"is_lifelong_vip\":true")["replace"](/\"wool":\d+/g,"\"wool\":100000");var _0x4a91b9={};_0x4a91b9["body"]=body;$done(_0x4a91b9);
