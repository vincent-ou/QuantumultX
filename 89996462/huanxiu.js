/* HuanXiu — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.9.1
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息（变量名仍为还原后的 _0x 命名），逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.shaolinzen.com
 */

body=$response["body"]["replace"](/\"vipActive":\w+/g,"\"vipActive\":true");var _0x4cbdd8={};_0x4cbdd8["body"]=body;$done(_0x4cbdd8);
