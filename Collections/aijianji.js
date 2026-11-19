/* 爱剪辑 — 解锁会员 / 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = api.open.loveclip.site */


var resp = JSON.parse($response.body);

if(/(UserPersonalCoreAsync|GetUserDetail)/.test($request.url)){
  resp.data.IsVip = true;
  resp.data.VipLevel = "1";
  resp.data.VipExpire = "2099-09-09 09:09:09";
}

$done({body : JSON.stringify(resp)});
