/* 歌歌AI写歌 — 会员信息改写 / 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = apiv2.somuseai.com */

var obj = JSON.parse($response.body);

obj.data.userinfo.status = {
  ...obj.data.userinfo.status,
  "is_vip" : 1,
  "vip_expired_date" : 4092599349,
  "vip_name" : "大师会员",
  "vip" : 2
};

$done({body : JSON.stringify(obj)});
