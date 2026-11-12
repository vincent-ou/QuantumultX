/*
白描 — 黄金会员

原版：https://raw.githubusercontent.com/chxm1023/Rewrite/main/baimiao.js
清理整理：Muse — 仅去作者推广、保用户身份，逻辑与数值与原版一致。
           appLaunchWithUser：写入黄金会员记录（deadline 2029-04-18），
           识别次数全部 -100（不限），翻译等额度按原版。
           getAnnouncement / checkLoginClient：清空返回（去公告/去登录提示）。
           注意：原版是 2023-12-05 的旧脚本，接口可能已变，未实测。
           去掉的作者推广：
             - 头像被改成作者的 ddm.png（large/small/medium/avatar）→ 已删，保留用户自己头像
             - 昵称被改成“叮当猫の分享频道”→ 已删，保留用户自己昵称
             - id 被改成作者的 45038072 → 已删，保留用户自己 id
             - bindings 被改成作者的绑定（username“叮当猫”、token“ddm1023”）→ 已删，保留用户自己绑定
           VIP 记录与识别额度里的 userId 改为从真实返回里取用户自己的 id。

[rewrite_local]
^https?:\/\/baimiao\.uzero\.cn\/api\/.+\/(appLaunchWithUser|getAnnouncement|checkLoginClient) url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/bm.js

[mitm]
hostname = baimiao.uzero.cn
*/

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
