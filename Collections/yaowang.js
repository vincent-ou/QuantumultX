/* 遥忘 — 解锁会员
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = *.whalean.com */

var obj = JSON.parse($response.body);
//遥忘
const vipa = /member\/userMemberHomePageV2/;
const vipb = /poseidon-service\/api\/user/;

if(vipa.test($request.url)){
  obj.data.memberInfos = [{
   ...obj.data.memberInfos,
   isMember: 0,
   memberLevel: 1,
   permanent: true,
   bizType: 1
  }];
}

if(vipb.test($request.url)){
  obj.data.userBaseResponse = {
   ...obj.data.userBaseResponse,
   authState: 1,
   userType: 1,
   hasVip: 1,
   isMember: 0,
   memberLevel: 1,
   permanent: true
  };
}

//薄荷壁纸
const bohe = /hestia-service\/api\/wpUser\/getUserInfo/;

if(bohe.test($request.url)){
  obj.data = {
   ...obj.data,
   memberEndTime: 4092599349000,
   memberType: 1,
   isMember: 0
  };
  obj.data.userAccount = {
   ...obj.data.userAccount,
   memberEndTime: "2099-09-09 09:09:09",
   renewalMethod: 1,
   memberFirstTime: "2023-12-21 16:15:02"
  };
}

$done({body : JSON.stringify(obj)});