/* 配音 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.6
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = xihongshi.dicallapp.com
 */

var body=$response["body"]["replace"](/Flag":\d/g,"Flag\":1")["replace"](/UserVipEnd":""/g,"UserVipEnd\":\"9999-11-28 22:51:24\"");$done({'body':body});
