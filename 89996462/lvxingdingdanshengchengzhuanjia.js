/* 旅行订单生成专家 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.1
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = ticket-api.aimusician.com.cn
 */

var objc = JSON.parse($response.body);

    objc = {"traceId":"TSN20240519179209092100572364880640","errorCode":200,"errorMessage":"操作成功","timeStamp":1716102745665,"data":{"userCode":30002416,"avatar":"https://ticket-file.aimusician.com.cn/user/avatar/10000000/10000000/avatarDefault@3x.png","nickname":"细水长流","userVipInfo":{
      "level" : 3,
      "title" : "航行无忧",
      "expireTime" : 8888888888000
    },}}



$done({body : JSON.stringify(objc)});
