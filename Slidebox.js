/*
Slidebox 相册清理 — 解锁完整版

原版：https://raw.githubusercontent.com/chxm1023/Rewrite/main/slidebox.js
清理整理：Muse — 仅去作者推广、删死代码，逻辑与数值与原版一致。
           拦截云函数 api_v1，返回伪造的 App Store 购买记录，
           含完整版内购 co.slidebox.iap.apple.fullversion。
           注意：validatedTimestampMs 是原作者写死的 2023-11-07 时间戳，
           若 App 校验收据时效可能失效，原版如此，未改。
           另：原版先 JSON.parse($response.body) 再整体丢弃，
           解析结果从未使用（死代码），已删，脚本不再依赖原始响应。

[rewrite_local]
^https?:\/\/.*-slidebox-ios-prod\.cloudfunctions\.net\/api_v1 url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/Slidebox.js

[mitm]
hostname = *-slidebox-ios-prod.cloudfunctions.net
*/

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
      "validatedTimestampMs": "1699365288625",
      "bundleId": "co.slidebox.Slidebox"
    }
  }
};

$done({ body: JSON.stringify(obj) });
