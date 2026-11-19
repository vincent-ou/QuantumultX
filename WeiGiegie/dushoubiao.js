/* 读手表 — 读手表-insight
 * 原作者：WeiGiegie
 * 适配版本：2.1.9
 * 清理整理：Muse — 去除作者推广与注释头，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = watch.taotiangou.cn
 */

let obj = JSON.parse($response.body);

if (obj.code === 200 && obj.data) {
    obj.data.memberType = 2;
    obj.data.isProPermanent = 0;
    obj.data.isProMaxPermanent = 1;
    obj.data.isPermanent = 1;
    obj.data.productId = "com.jsx.insight.pro_max_forever";
    let distantFuture = "2099-12-31 23:59:59";
    obj.data.proStartTime = distantFuture;
    obj.data.proEndTime = distantFuture;
    obj.data.proMaxStartTime = distantFuture;
    obj.data.proMaxEndTime = distantFuture;
}

$done({body: JSON.stringify(obj)});
