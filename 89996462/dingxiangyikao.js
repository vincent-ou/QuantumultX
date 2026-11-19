/* DingXiangYiKao — 解锁订阅
 * 原作者：89996462
 * 适配版本：6.31.5
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = exam.dxy.cn
 */

var body=$response['body']["replace"](/unlockType":\d+/g,'unlockType\x22:3');$done({'body':body});
