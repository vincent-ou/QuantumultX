/* 古诗词大全 — 解锁订阅
 * 原作者：89996462
 * 适配版本：2.4
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = gushici.91iread.com
 */

var body=$response['body']['replace'](/"isVip":0/g,'\x22isVip\x22:1');$done({'body':body});
