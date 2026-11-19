/* Vista — 解锁 VIP / 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = open3.vistastory.com */

var obj = JSON.parse($response.body);
const subscription = {      "userId" : 666666,      "beginTime" : 1666666666666,      "id" : 188888,      "endTime" : 4092599349000,      "createTimeFormat" : "2022-10-25 10:57:46",      "createTime" : 1666666666666,      "isActive" : 1    };

const vipa = '/api/vip';
const vipb = '/my/home/get_home_center';
const guashi = '/user/pendant';
const yaoqing = '/poster/share_poster'
const popup = '/adm/get_popup_ad';
const ad = '/index/loading_ad';


if ($request.url.indexOf(vipa) != -1){
  obj["isVip"] = 1;
  obj["expireVip"] = 0;
  obj["subscriptionVip"] = (subscription);
  obj["isUpgradeVip"] = 0;
  obj["vipInfo"] = {
    "isMiniVip" : 0,
    "expireVip" : 0,
    "subscriptionVip" : (subscription),
    "isVip" : 1
  };
}

if ($request.url.indexOf(vipb) != -1){
  obj["subscriptionVip"] = (subscription);
  obj["isVip"] = 1;
  obj["level"] = 99;
  obj["exp"] = 0;
}

if ($request.url.indexOf(guashi) != -1){
  obj.userLevel = 99;
  obj.status = 1;
  obj.msg = "success";
  if(obj.pendantList && Array.isArray(obj.pendantList)) {
    obj.pendantList.forEach(item => {
      item.level = 1;
    });
  }
}

if ($request.url.indexOf(yaoqing) != -1){
  obj.posterList = [
    {
      "status" : 1,
      "id" : 6,
      "title" : "                                                                ",
      "position" : 0
    }
  ];
  obj.inviteUrl = ""
}

if ($request.url.indexOf(popup) != -1){
  delete obj.popup;
}

if ($request.url.indexOf(ad) != -1){
  delete obj.ad;
}

$done({body : JSON.stringify(obj)});
