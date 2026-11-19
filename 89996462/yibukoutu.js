/* 一卟抠图 — VIP 解锁
 * 原作者：89996462
 * 适配版本：v1.6.0
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = ff.mofangzhice.com
 */

let body = $response.body;
body = body.replace(/"vip":[^,}]*/g, `"vip":{
  "forever": 1,
  "plan_id": 9999,
  "func_quota": 999999,
  "actived_at": "2026-01-06 00:00:00",
  "latest_ip": "192.168.1.1",
  "func_times": 999999,
  "trial_info": "",
  "isExpired": 0,
  "start_time": "2026-01-06 00:00:00",
  "viptype": 4,
  "is_vip_plan": 1,
  "ios_product_id": "com.mofang.permanent",
  "vipname": "永久会员",
  "expired_at": "2999-12-31 23:59:59",
  "now_date": "2026-01-06 00:00:00",
  "is_trial": 0,
  "status": 1
}`);

$done({body});
