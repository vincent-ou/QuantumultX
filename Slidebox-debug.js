/*
Slidebox 抓包+解锁二合一调试脚本（临时用）
用途：既打日志（看 api_v1 真实返回长什么样），又做解锁改写。
只在抓真实返回时用，抓完换回正式的 Slidebox.js。
改写内容与 Slidebox.js 相同：返回伪造的 App Store 购买记录。

[rewrite_local]
^https?:\/\/.*-slidebox-ios-prod\.cloudfunctions\.net\/api_v1 url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/Slidebox-debug.js

[mitm]
hostname = *-slidebox-ios-prod.cloudfunctions.net
*/

var url = $request.url;
var body = $response.body;
console.log('[slidebox-debug] URL: ' + url);
console.log('[slidebox-debug] RESP BODY: ' + body);

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
