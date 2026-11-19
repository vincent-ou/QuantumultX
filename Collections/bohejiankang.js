/* 薄荷健康 — 解锁会员 / 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = api.boohee.com */


var resp = JSON.parse($response.body);

resp.data.vip.is_member = true;
resp.data.vip.state = "1";
resp.data.vip.expired_at = "2099-09-09 09:09:09";
resp.data.vip.integral_member = {
  "integral": 0,
  "level": 1,
  "level_name": "蓝钻会员"
};

$done({body : JSON.stringify(resp)});
