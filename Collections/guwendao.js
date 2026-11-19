/* 古文岛 — 会员信息改写
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = *.guwendao.net */

var obj = JSON.parse($response.body);

if(/api\/user\/getVip/.test($request.url)){
  obj.svip = "/Date(4092599349000)/";
}

if(/router\/user\/getUserInfo/.test($request.url)){
  obj.result.user = {
    ...obj.result.user,
    "vipTimeSpan" : 9466560000000,
    "shebeiIsMore" : true,
    "svipTimeSpan" : 9466560000000,
    "vipTime" : "2099-09-09 09:09:09",
    "svipTime" : "2099-09-09 09:09:09"
  };
}

$done({body : JSON.stringify(obj)});
