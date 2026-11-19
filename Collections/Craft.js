/* Craft — 订阅解锁
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = api.craft.do */

var obj = JSON.parse($response.body);

if (/auth\/v\d\/profile/.test($request.url)) {
  obj.teams = obj.teams || [{}];
  obj.spaces = obj.spaces || [{}];
  obj.teams.forEach(team => {
    team.tier = "V2_Team";
    team.subscriptionInfo = {
      "autoRenewStatus": true,
      "provider": "AppStore",
      "rawType": "AppStore",
      "subscriptionId": "55555555-8888-1023-8888-999999999999",
      "expirationTime": 4092599349000,
      "renewPeriod": "Yearly"
    };
  });
  obj.spaces.forEach(space => {
    space.tier = "V2_Team";
  });
}


if (/subscription\/receipt/.test($request.url)) {
  obj.subscription = {
    "expirationDate": 4092599349000,
    "subscriptionActive": true,
    "subscriptionId": "55555555-8888-1023-8888-999999999999",
    "productId": "com.lukilabs.lukiapp.v2_team_2.sub.yearly_test",
    "tier": "Pro",
    "subscriptionType": "appStoreV2TeamYearly",
    "rawSubscriptionType": "AppStore",
    "autoRenewStatus": true
  };
}

if (/subscription\/teams\/get-subscriptions/.test($request.url)) {
  obj.subscriptions = obj.subscriptions || [{}];
  obj.tier = "V2_Team";
  obj.subscriptions.push({
    "isPrimary": true,
    "provider": "AppStore",
    "subscriptionId": "55555555-8888-1023-8888-999999999999",
    "renewPeriod": "Yearly",
    "rawType": "AppStore",
    "tier": "V2_Team",
    "expirationTime": 4092599349000,
    "isActive": true
  });
}

$done({ body: JSON.stringify(obj) });
