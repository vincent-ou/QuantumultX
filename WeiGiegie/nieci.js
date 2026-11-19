/* 捏词 — 捏词-自担陪你背四六级考研
 * 原作者：WeiGiegie
 * 适配版本：1.2.0
 * 清理整理：Muse — 去除作者推广与注释头，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = ainieci.com
 */

let obj = JSON.parse($response.body);

if (obj.code === 200 && obj.data) {
    obj.data.userType = 1;
    
    obj.data.expireTime = "2099年12月31日";
    obj.data.rank = 1;
    obj.data.learnedNum = 9999;
    obj.data.contextLength = 9999;

    obj.data.vipStatus = 1;
    obj.data.vipRights = ["专属权限1", "专属权限2"];
}

$done({body: JSON.stringify(obj)});
