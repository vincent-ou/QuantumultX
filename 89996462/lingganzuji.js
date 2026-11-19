/* 灵敢足迹 — 高级会员
 * 原作者：89996462
 * 适配版本：3.0.0
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = footprint-api.quthing.com
 */

var body = JSON.parse($response.body);

body.data.trialPeriod = false,
body.data.vipType = 7,
body.data.validVip = true,
body.data.expireTime = 4102372800000,
body.data.vipCount = 999999999,

$done({ body: JSON.stringify(body) });
