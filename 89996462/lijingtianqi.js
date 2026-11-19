/* 莉景天气 — 解锁订阅
 * 原作者：89996462
 * 适配版本：2.0.19
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = ljwapi.baichuan.tech
 */

body=$response["body"]["replace"](/\"isVIP":\w+/g,'\x22\x69\x73\x56\x49\x50\x22\x3a\x74\x72\x75\x65')["replace"](/\"isDevice":\w+/g,"\"isDevice\":true")["replace"](/\"expiresTime":\d+/g,"\"expiresTime\":9999285284241");$done({'\x62\x6f\x64\x79':body});
