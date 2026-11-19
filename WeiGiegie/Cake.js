/* Cake — cake-学习英语与韩语
 * 原作者：WeiGiegie
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广与注释头，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.mycake.me
 */

var obj = JSON.parse($response.body);

if (obj && obj.extra) {
    obj.extra.membershipBenefitBridgeId = 0;
    obj.extra.membershipSource = "CAKE";
    obj.extra.membership = "PLUS";
    obj.extra.subscriptionStatus = "FREE_TRIAL";
}

$done({body: JSON.stringify(obj)});
