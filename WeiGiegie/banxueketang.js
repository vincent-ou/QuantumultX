/* 伴学课堂 — 伴学课堂
 * 原作者：WeiGiegie
 * 适配版本：1.4.4
 * 清理整理：Muse — 去除作者推广与注释头，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.banxueketang.com
 */

let body = $response.body;
if (!body) return $done({});

try {
    let obj = JSON.parse(body);
    if (obj.data) {
        let data = obj.data;
        
        // 全局VIP
        data.isVip = true;
        data.isHave = true;
        data.isLock = false;
        data.isSale = true;
        data.isVipExpire = false;
        data.originalPrice = 0;
        data.salePrice = 0;
        data.trialTopNum = 999;

        // 解锁所有视频
        if (Array.isArray(data.refBusinessList)) {
            data.refBusinessList.forEach(i => i.isLock = false);
        }
        
        body = JSON.stringify(obj);
    }
} catch(e) {
    body = body.replace(/"isVip":false/g, '"isVip":true');
    body = body.replace(/"isHave":false/g, '"isHave":true');
    body = body.replace(/"isLock":true/g, '"isLock":false');
}

$done({ body });
