/* 推剧助手 — 会员信息改写 / 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = film-api.startupfun.vip */

var obj = JSON.parse($response.body);
const vip = /vip\/info/;
const point = /user\/point\/info/;
const bf = /check/;

if(vip.test($request.url)){
  obj.vipDesc = "会员有效期至：2099-09-09 09:09";
  obj.vipInfo.forEach(item => {
    if ('vipType' in item && 'vipStatus' in item && 'vipDesc' in item) {
      item.vipType = 1;
      item.vipStatus = 1;
      item.vipDesc = "会员有效期至：2099-09-09 09:09";
    }
    if ('mobile' in item) {
      item.mobile = "会员有效期至：2099-09-09 09:09";
    }
    if (item.userInfo) {
      item.userInfo.dailyRemaining = 99;
      item.userInfo.dailyLimit = 99;
      item.userInfo.permanentPoints = 99;
    }
  });
  
  obj.queryTimes = 3;
  obj.vipStatus = 1;
  obj.isTrial = 1;
  obj.coins = 99;
  obj.isNewAwardTimes = 99;
}

if(point.test($request.url)){
  obj.points = 999;
  obj.permanentPoints = 999;
}

if(bf.test($request.url)){
  obj.canGenerate = 1;
  obj.needDuration = 0;
}

$done({ body: JSON.stringify(obj) });
