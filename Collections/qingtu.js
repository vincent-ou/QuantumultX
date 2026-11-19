/* 轻图 — 解锁订阅 / 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = purchase-*-api.*.com, user-kaji-api.b612kaji.com */

var obj = JSON.parse($response.body);
const Foodie = 'https://purchase-foodiecn-api.yiruikecorp.com';
const qingtu = 'https://purchase-qingtu-api.b612kaji.com';
const B612xj = 'https://user-kaji-api.b612kaji.com';
const tianyan = 'https://purchase-tianyan-api.tianyancam.com';

//Foodie
if ($request.url.indexOf(Foodie) != -1){
  id = "com.linecorp.Foodiecn.subscribe.oneyear";
}

//轻图
if ($request.url.indexOf(qingtu) != -1){
  id = "com.photovision.camera.subscribe.plan.oneyear";
}

//B612相机
if ($request.url.indexOf(B612xj) != -1){
  id = "com.campmobile.snowcamera.vip.oneyear";
}

//甜盐相机
if ($request.url.indexOf(tianyan) != -1){
  id = "com.yiruike.sodacn.subscribe.oneyear";
}

obj = {  "result" : {    "products" : [      {        "managed" : false,        "status" : "ACTIVE",        "startDate" : 1666666666666,        "productId" : (id),        "expireDate" : 4092599349000      }    ],    "activated" : true  }};

$done({body : JSON.stringify(obj)});
