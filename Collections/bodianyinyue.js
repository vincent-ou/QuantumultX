/* 波点音乐 — 解锁会员 / 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = bd-api.kuwo.cn */

var body = $response.body;
var obj = JSON.parse(body);
const vipa = /api\/(ucenter\/users|play\/listening\/user)/;
const ad = /api\/service\/(home\/index|banner\/myPage)/;
const advert = /api\/service\/advert\/watch/;

if(vipa.test($request.url)){
  obj.data.payInfo = {
      "expireDate" : 4092599349000,
      "isSigned" : 1,
      "lastPayType" : 1,
      "isVip" : 1
    };
  obj.data.payRights = {
      "headPendant" : {
        "id" : 11,
        "name" : "音波",
        "pic" : "https://bodiancdn.kuwo.cn/file/bc92ceb2fb555e34246cdf4f558015ec.gif"
      }
    };
  obj.data.isBind = 1;
  obj.data.userInfo = {
   ...obj.data.userInfo,
   "isVip" : 1,
   "authType" : 3,
   "headOuterImg" : "https://bodiancdn.kuwo.cn/file/bc92ceb2fb555e34246cdf4f558015ec.gif",
   "status" : 1
  };
}

if(ad.test($request.url)){
  obj.data.bannerList = [];
  if (obj.data.moduleList && obj.data.moduleList.length > 0) {
   obj.data.moduleList = obj.data.moduleList.filter(item => item.name !== "轮播图" && item.name !== "波点实验室");
  };
}

if(advert.test($request.url)){
  obj.data = {
    "mvGuide" : "看广告，解锁所有VIP歌曲\n解锁后可畅听%s",
    "expireTime" : 0,
    "mvDuration" : 0
  };
}

$done({body : JSON.stringify(obj)});
