/* 乐刷短剧 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.1.1
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = akdj.lunlunkj.vip
 */

var objc = JSON.parse($response.body);

    objc = 
{
  "msg": "操作成功！",
  "code": 0,
  "data": {
    "id": "1220255",
    "mobile": "",
    "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Z1LFYRhfXAsBic1ib1icjzHg53JHh2xtUMM23GhBhGFflTxXyR3CMHibAfibxH4oaat0szUCoIGkmFmISLa5ib3Zqqfg/132",
    "sex": 1,
    "birthday": "1989-10-10",
    "points": null,
    "account": {
      "id": "1220255",
      "redChange": 24.00,
      "smallChange": 128.00,
      "cashChange": 0.00
    },
    "vipInfo": {
      "id": "1220255",
      "startTime": "2023-09-13 10:19:32",
      "endTime": "9999-09-14 10:19:32",
      "vipType": 1,
      "updateTime": "2023-09-13 10:19:32",
      "state": 0,
      "leftDays": 0
    },
    "ucLevel": 1,
    "createTime": "Wed Sep 13 10:15:12 CST 2023",
    "preId": null,
    "auctionNum": null,
    "couponNum": null,
    "giftOrderNum": null,
    "mallOrderNum": null,
    "adviceNum": null,
    "vipEnabled": true,
    "vipBanner": "http://file.meetboxs.com/common/bg_fen_vip.png"
  },
  "success": true
}

$done({body : JSON.stringify(objc)});
