/* Slidebox — 解锁完整版 / 清理整理：Muse — 沿用本地已清理版，逻辑原文照抄；注释头统一、脚本地址改为 Collections/ 路径，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = *-slidebox-ios-prod.cloudfunctions.net */

var obj = {
  "data": {
    "env": {
      "projectId": "slidebox-ios-prod",
      "region": "asia-east2",
      "function": "api_v1",
      "realm": "prod"
    },
    "appStoreRecord": {
      "purchases": [
        {
          "productId": "co.slidebox.iap.apple.fullversion"
        }
      ],
      "subscriptions": [],
      "validatedTimestampMs": "1794489777544",
      "bundleId": "co.slidebox.Slidebox"
    }
  }
};

$done({ body: JSON.stringify(obj) });
