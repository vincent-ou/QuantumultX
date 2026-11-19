/* AI换脸秀 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.1.1
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = changeclothes.szsszykj.com
 */

var objc=JSON["parse"]($response["body"]);objc={'Header':{'Result':0x0,'Msg':"查询成功"},'Content':{'system_time':"2022-09-18 11:23:06",'end_time':"2099-09-09 09:09:09",'is_vip':0x1}};$done({'body':JSON["stringify"](objc)});
