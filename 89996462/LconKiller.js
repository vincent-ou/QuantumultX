/* lcon killer — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.8
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.yonekura.cn
 */

var body=$response["body"]['replace'](/vip":"\d"/g,"vip\":\"1\"")["replace"](/isVip":\w+/g,"isVip\":true")["replace"](/expireTime":"\d+"/g,'expireTime\x22:\x22253392455349\x22');$done({'body':body});
