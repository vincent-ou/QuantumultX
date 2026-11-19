/* IFTTT — 订阅解锁 / 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = ifttt.com */

var ddm = JSON.parse($response.body);

const data = {"normalized_user_tier":"pro","applet_quota_slots_total":20,"user_subscriptions":[{"expires_at":"2099-09-09 09:09:09 -0700","id":"777777","status":"active","payment_type":"apple","plan_id":"pro"}],"permissions":{"multi_action":{"minimum_tier":"intermediate_pro","permitted":true},"multi_service_account":{"minimum_tier":"pro","permitted":true},"queries":{"minimum_tier":"pro","permitted":true},"filter_code":{"minimum_tier":"pro","permitted":true}},"applet_quota_slots_remaining":20,"tier":"pro"};

const updateUserSubscription = (target) => {
  if (target.user_subscriptions) {
    Object.assign(target, data);
  }
};

if (ddm.data.sessionSignInSso?.user) {
  updateUserSubscription(ddm.data.sessionSignInSso.user);
}

if (ddm.data.me) {
  updateUserSubscription(ddm.data.me);
}

$done({ body: JSON.stringify(ddm) });
