/*
AppRaven — 解锁会员权限

原版：https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/XiaoMaoAppRaven.js
逻辑原版：https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/ar.js
清理整理：Muse — 仅去作者推广，逻辑与数值与原版一致。
           拦截 appraven.net 的 GraphQL 接口，字符串替换：
             "premium":false → true（会员）
             "adsEnabled":true → false（去广告）
             "loadAdsOnStartup":true → false（启动不加载广告）
             "adTimerEnabled":true → false（关广告计时）
             权限不足的提示文案换成一句玩笑（原版行为，保留）。
           原版注明：已知内购限免无法显示。

[rewrite_local]
https:\/\/appraven\.net\/appraven\/graphql url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/AppRaven.js

[mitm]
hostname = appraven.net
*/

var body = $response.body || "";
if (body) {
  body = body
    .replace(/"premium":false/g, '"premium":true')
    .replace(/"adsEnabled":true/g, '"adsEnabled":false')
    .replace(/"loadAdsOnStartup":true/g, '"loadAdsOnStartup":false')
    .replace(/"adTimerEnabled":true/g, '"adTimerEnabled":false')
    .replace(/You don't have enough permissions./g, "我也想看，但也没辙～");
}

var obj = body ? JSON.parse(body) : {};
$done({ body: JSON.stringify(obj) });
