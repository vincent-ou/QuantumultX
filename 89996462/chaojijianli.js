/* ChaoJiJianLi — 解锁订阅
 * 原作者：89996462
 * 适配版本：3.3.6
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.wondercv.com
 */

var body=$response["body"]["replace"](/is_membership":\w+/g,"is_membership\":true")["replace"](/membership_expired_at":null/g,'membership_expired_at\x22:253392455349000')["replace"](/subscribe":\w+/g,"subscribe\":true");$done({'body':body});
