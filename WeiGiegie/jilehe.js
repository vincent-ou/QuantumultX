/* 鸡乐盒 — 鸡乐盒
 * 原作者：WeiGiegie
 * 适配版本：1.1.14
 * 清理整理：Muse — 去除作者推广与注释头，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = www.mhzcookbook.xyz
 */

var obj = JSON.parse($response.body);

if (obj.data) {
    // VIP related modifications
    obj.data.vipIsOverdue = false;
    obj.data.badgeLevel = 9;
    obj.data.vip_expiration_time_show = "2099-12-31";
    obj.data.nickName = "Lifetime VIP";
    
    // Badge hint
    obj.data.badgeHint = "VIP member exclusive badge unlocked";

    // Disable ads
    if (obj.data.ad) {
        obj.data.ad.showAd = false;
        if (obj.data.ad.csj) {
            obj.data.ad.csj.probability = 0;
        }
        if (obj.data.ad.ylh) {
            obj.data.ad.ylh.probability = 0;
        }
        if (obj.data.ad.huawei) {
            obj.data.ad.huawei.probability = 0;
        }
    }
}

$done({body: JSON.stringify(obj)});
