/* Lingokids — 解锁订阅
 * 原作者：89996462
 * 适配版本：7.101.0
 * 清理整理：Muse — 去作者写死的整段账号（邮箱/token/孩子姓名），改为保留真实返回、只写订阅与解锁单元，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.lingokids.com
 */

var obj = JSON.parse($response.body || '{}');
var sub = {
  "id": 0x3bb81c,
  "status": "trial",
  "in_grace_period": false,
  "product": "unlimited",
  "platform": "apple",
  "starts_at": 0x634ac470,
  "ends_at": 0x7075d09a,
  "plan_id": "lk.ios.s1m.t7d.p15.v2",
  "duration_unit": "months",
  "duration_value": 1,
  "auto_renew_status": true
};
if (obj.info) {
  obj.info.subscriptions = [sub];
  var children = obj.info.children || [];
  children.forEach(function (c) {
    if (c.units) {
      Object.keys(c.units).forEach(function (k) {
        if (c.units[k]) c.units[k].status = "unlocked";
      });
    }
    c.curriculum_unlocked = true;
  });
}
$done({ body: JSON.stringify(obj) });
