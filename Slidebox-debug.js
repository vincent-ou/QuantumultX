/*
Slidebox 调试脚本（临时用）
只打日志 + 对 /api_v1 做解锁改写，其它接口原样放行。
用途：看新版 Slidebox 除了 /api_v1 还调了哪些接口、购买状态从哪来。
抓完换回正式的 Slidebox.js。

[rewrite_local]
^https?:\/\/.*-slidebox-ios-prod\.cloudfunctions\.net\/.* url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/Slidebox-debug.js

[mitm]
hostname = *-slidebox-ios-prod.cloudfunctions.net
*/

var url = $request.url;
var body = $response.body;
console.log('[slidebox-debug] URL: ' + url);
console.log('[slidebox-debug] RESP BODY: ' + body);

// 只改写 /api_v1，其它接口原样放行，避免改坏别的功能
if (url.indexOf('/api_v1') !== -1) {
  $done({
    body: JSON.stringify({
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
    })
  });
} else {
  $done({ body: body });
}
