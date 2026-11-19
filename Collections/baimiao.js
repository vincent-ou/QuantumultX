/* 白描 — 黄金会员 / 清理整理：Muse — 沿用本地已清理版，逻辑原文照抄；注释头统一、脚本地址改为 Collections/ 路径，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = baimiao.uzero.cn */

var obj = JSON.parse($response.body);

var userId = (obj && obj.value && obj.value.id) || 0;

var Data = {
  "id": 102366,
  "boughtType": "new",
  "createdTime": 1555777247,
  "levelSeq": 2,
  "boughtUnit": "year",
  "levelId": 2,
  "userId": userId,
  "boughtTime": 1555777247,
  "boughtDuration": 10,
  "orderId": 160888,
  "operatorId": 0,
  "level": {
    "isSubscribe": 0,
    "monthPrice": 0.02,
    "maxRate": 100,
    "yearPrice": 40,
    "recognizeNormal": -100,
    "upgradeSubscribePrice": 0,
    "picture": "",
    "icon": "",
    "gived": 0,
    "recognizeTranslateAll": 1,
    "pdfTranslateCount": 0,
    "name": "黄金会员",
    "createdTime": 1429260383,
    "id": 2,
    "enabled": 1,
    "recognizeBatch": -100,
    "seq": 2,
    "pdfTransCount": 0,
    "recognizeTranslate": -100,
    "description": ""
  },
  "deadlineNotified": 0,
  "deadline": 1871396447,
  "boughtAmount": 40
};

if (/appLaunchWithUser/.test($request.url)) {
  if (obj && obj.value) {
    obj.value.vips = [Data];
    obj.value.vip = Data;
    obj.value.recognize = {
      "remainBatch": -100,
      "batchCount": 1,
      "normalCount": -100,
      "translateCount": 3,
      "remainPdfTranslateCount": 0,
      "pdfTranslateCount": 0,
      "remainNormal": -100,
      "userId": userId,
      "pdfCount": 0,
      "remainPdfTransCount": 0,
      "balanceCount": 0,
      "shareCount": 3,
      "remainTranslate": -100,
      "remainShare": 3,
      "recognizeTranslateAll": 1
    };
  }
}

if (/(getAnnouncement|checkLoginClient)/.test($request.url)) {
  obj = {};
}

$done({ body: JSON.stringify(obj) });
