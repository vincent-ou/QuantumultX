/* 格式转换 — 解锁会员 / 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = format-api.netpock.com */


var body = $response.body;
var resp = JSON.parse(body);

resp.data.is_vip = true;
resp.data.wps_size = 999;
resp.data.vip_expiration_time = 4092599350;

$done({body : JSON.stringify(resp)});
