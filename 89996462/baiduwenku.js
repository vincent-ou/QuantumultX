/* 百度文库☆ — 解锁订阅
 * 原作者：89996462
 * 适配版本：8.1.01
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息（变量名仍为还原后的 _0x 命名），逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = appwk.baidu.com
 */

let obj=JSON["parse"]($response["body"]);const _0x3f46be={};_0x3f46be['uid']=0xbc614e;_0x3f46be["type"]=0x2;_0x3f46be["start_time"]=0x60b12578;_0x3f46be["end_time"]=0x113818378;_0x3f46be["is_vip"]=0x1;_0x3f46be["remain_day"]=0x3e7;_0x3f46be["pro_total"]=0x5;_0x3f46be["normal_total"]=0x5;obj["data"]["vip"]["base_vip_info"]=_0x3f46be;const _0x1a7a22={};_0x1a7a22["body"]=JSON["stringify"](obj);$done(_0x1a7a22);
