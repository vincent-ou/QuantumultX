/* MaoDouAiChengYu — 解锁订阅
 * 原作者：89996462
 * 适配版本：9999
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = *.feihua100.com
 */

var body = $response.body.replace(/isBuy":0/g,'isBuy":1')
.replace(/isVip":0/g,'isVip":2')
.replace(/isRights":false/g,'isRights":true')
.replace(/isHasVip":false/g,'isHasVip":true')
.replace(/isOpen":\d/g,'isOpen":1')
.replace(/isAudition":\d/g,'isAudition":1')
.replace(/is_exp_class":0/g,'is_exp_class":1')
.replace(/isEnable":2/g,'isEnable":1')
.replace(/isExperiential":2/g,'isExperiential":1')
.replace(/isRight":false/g,'isRight":true')
$done({ body });
