/* Busuu — 解锁订阅
 * 原作者：89996462
 * 适配版本：27.36.0
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息（变量名仍为还原后的 _0x 命名），逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.busuu.com
 */

body=$response["body"]["replace"](/\"tier":"\w+"/g,"\"tier\":\"plus\"")["replace"](/\"free_trial_eligible":\w+/g,"\"free_trial_eligible\":false")["replace"](/\"is_premium":\w+/g,"\"is_premium\":true")["replace"](/\"free_trial\":\w+/g,"\"free_trial\":true")["replace"](/\"expiration":\d+/g,"\"expiration\":3745855150")["replace"](/\"next_charge":\d+/g,"\"next_charge\":3745855150");var _0x4d3e04={};_0x4d3e04["body"]=body;$done(_0x4d3e04);
