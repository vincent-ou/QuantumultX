/* AiZhuTi — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.6.9
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = itheme.thinkingcloud.net
 */

var objc=JSON["parse"]($response['body']);objc={'code':0x0,'vip':0x1,'vipExpiresDateMs':"2999-11-11 00:00:00",'vipTypeName':"vip用户",'ratings':!![],'themeCount':0x0};$done({'body':JSON["stringify"](objc)});
