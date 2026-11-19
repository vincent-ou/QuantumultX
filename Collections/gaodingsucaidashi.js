/* 高定素材大师 — 会员信息改写 / 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = apps-api.lianaishouce.cn, apps-api.lingege.cn */

var obj = JSON.parse($response.body);
const login = /public\/login.*/;
const user = /getUserInfo/;
const vipData = {"memberExpireTimeStr":"2099-09-09 09:09:09","memberExpireTime":4092599349000,"memberStatusStr":"已开通","remainNum":9999,"vipLevel":4,"memberStatus":1,"isForeverVip":true};

if (login.test($request.url)) {
  obj.data.userInfo = { 
    ...obj.data.userInfo, 
    ...vipData 
  };
}

if (user.test($request.url)) {
  obj.data = { 
    ...obj.data, 
    ...vipData 
  };
}

$done({ body: JSON.stringify(obj) });
