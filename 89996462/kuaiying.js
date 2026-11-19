/* KuaiYing — 解锁订阅
 * 原作者：89996462
 * 适配版本：6.4.0
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.kmovie.gifshow.com
 */

var body=$response["body"]["replace"](/vip":\w+/g,"vip\":false");$done({'body':body});
