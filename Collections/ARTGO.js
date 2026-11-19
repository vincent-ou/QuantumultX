/* ARTGO — 会员信息改写
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = api */

var body = $response.body.replace(/\"vipExpiredAt":\d+/g, '\"vipExpiredAt":4092599349000').replace(/\"userVipExpiredAt":\d+/g, '\"userVipExpiredAt":4092599349000').replace(/\"chargeType":\d+/g, '\"chargeType":0').replace(/\"downloadAfterPay":\d+/g, '\"downloadAfterPay":1');$done({body});
