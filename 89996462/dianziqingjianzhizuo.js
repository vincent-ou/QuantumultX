/* 电子请柬制作 — 解锁订阅
 * 原作者：89996462
 * 适配版本：v2.3.5
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = cn.invit.vip
 */

body=$response['\x62\x6f\x64\x79']["replace"](/\"is_vip":\d/g,"\"is_vip\":1")["replace"](/\"vip_exp":\d+/g,"\"vip_exp\":8888888800");$done({'\x62\x6f\x64\x79':body});
