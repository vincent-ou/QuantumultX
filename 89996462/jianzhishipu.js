/* JianZhiShiPu — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.0.50
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = gugu.zomoplan.com
 */

var body=$response['body']["replace"](/"userState":\d/g,"\"userState\":1")['replace'](/"userRole":".*?"/g,"\"userRole\":\"vip\"")['replace'](/"userVipType":".*?"/g,"\"userVipType\":\"1\"")["replace"](/"userVipExpires":".*?"/g,"\"userVipExpires\":\"2099-11-11\"")["replace"](/"expDay":-\d+/g,"\"expDay\": -999")['replace'](/"code":\d+/g,"\"code\":200");$done({'body':body});
