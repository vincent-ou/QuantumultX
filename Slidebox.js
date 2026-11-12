/*
Slidebox 相册清理 — 解锁完整版

原版：https://raw.githubusercontent.com/chxm1023/Rewrite/main/slidebox.js
清理整理：Muse — 仅去作者推广、删死代码，逻辑与数值与原版一致。
           拦截云函数 api_v1，返回伪造的 App Store 购买记录，
           含完整版内购 co.slidebox.iap.apple.fullversion。
           注意：validatedTimestampMs 原版是写死的 2023-11-07 时间戳，
           App 很可能校验收据时效，2023 年的时间戳会被判过期——
           已改为当前时间（2026-11-12）。若以后又失效，把这个时间戳
           更新到当天即可。原版如此，未改其他数值。
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
      "validatedTimestampMs": "1794489777544",
      "bundleId": "co.slidebox.Slidebox"
    }
  }
};

$done({ body: JSON.stringify(obj) });
