/* CEO周课 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.7.2
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = user.xiaozaoapp.com
 */

var body=$response["body"];var url=$request["url"];var obj=JSON["parse"](body);const vip="/loginAuto";if(url["indexOf"](vip)!=-0x1){obj['data']['is_vip']=0x1;obj['data']["vip_end_time"]="2088-09-11 19:36:44";obj["data"]["vip_start_time"]="2088-09-11 19:36:44";body=JSON["stringify"](obj);}$done({'body':body});
