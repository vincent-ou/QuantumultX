/* NexCam — VIP 解锁
 * 原作者：89996462
 * 适配版本：未注明
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.mag-store.com
 */

let body = $response.body;
let obj = JSON.parse(body);

if (obj.data) {

    obj.data.member = true;
    obj.data.memberExpiresAt = "2099-12-31T23:59:59";
    obj.data.vipExpiresAt = "2099-12-31T23:59:59";
    obj.data.vipExpiresAtIso = "2099-12-31T15:59:59Z";
    obj.data.vipExpiresAtMs = 4102444799000;       
    obj.data.vipRemainingSeconds = 2592000000;      
    obj.data.userType = "vip";
    obj.data.trialClaimLimit = 999;
    obj.data.trialClaimUsed = 0;
    obj.data.trialClaimRemaining = 999;
}

$done({ body: JSON.stringify(obj) });
