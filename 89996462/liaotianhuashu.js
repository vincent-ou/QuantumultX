/* 聊天话术 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.7
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息（变量名仍为还原后的 _0x 命名），逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.chuangqi.store
 */

body=$response["body"]["replace"](/\"vip_end_time":\w+/g,"\"vip_end_time\":\"2099-11-11\"")["replace"](/\"is_ad_vip":\d+/g,"\"is_ad_vip\":1")["replace"](/\"isvip":\d+/g,"\"isvip\":1");var _0x2ecd7f={};_0x2ecd7f["body"]=body;$done(_0x2ecd7f);
