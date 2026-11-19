/* Foodie 美食相机 — VIP 解锁
 * 原作者：89996462
 * 适配版本：5.2.11
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = purchase-foodiecn-api.yiruikecorp.com
 */

var objc = JSON.parse($response.body);

    objc = {
  "result" : {
    "activated" : true,
    "products" : [
      {
        "managed" : false,
        "status" : "ACTIVE",
        "startDate" : 1666666666666,
        "productId" : "com.linecorp.Foodiecn.subscribe.oneyear",
        "expireDate" : 4092599349000
      }
    ]
  }
}
$done({body : JSON.stringify(objc)});
