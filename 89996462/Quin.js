/* Quin — 解锁订阅
 * 原作者：89996462
 * 适配版本：103.2.1
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = askquin.cn
 */

var objc = JSON.parse($response.body);
    objc = {
  "login": false,
  "success": true,
  "error": false,
  "errorCode": 0,
  "errorMessage": "",
  "data": {
    "subscription": {
      "subscriptionType": "one-month-max",
      "nextBillingAt": "9999-09-09T14:39:15.000Z",
      "paymentType": "apple-app-store",
      "plan": "max",
      "period": {
        "count": 9999,
        "unit": "year"
      },
      "expiredAt": "9999-09-09T14:39:15.000Z",
      "renewAt": "9999-09-09T14:39:15.000Z"
    },
    "token": {
      "hasToken": true,
      "outputUsedTokens": 0,
      "remainingTokens": 40000
    },
    "count": {
      "dailyReadCount": 0,
      "rewardReadCount": 0,
      "remainingReadCount": 0,
      "totalRewardReadCount": 0,
      "dailyFreeReadCount": 0,
      "remainingFreeReadCount": 20,
      "totalFreeReadCount": 20,
      "singleFreeReadCount": 0,
      "imageGenerationTotalCount": 0,
      "imageGenerationUsedCount": 0
    },
    "countV2": [{
      "type": "vip",
      "usedCount": 0,
      "totalCount": 9999
    }, {
      "type": "vip",
      "usedCount": 0,
      "totalCount": 9999
    }, {
      "type": "vip",
      "usedCount": 0,
      "totalCount": 9999
    }],
    "quinCardCount": [{
      "type": "vip",
      "usedCount": 0,
      "totalCount": 9999
    }, {
      "type": "vip",
      "usedCount": 0,
      "totalCount": 9999
    }, {
      "type": "vip",
      "usedCount": 0,
      "totalCount": 9999
    }],
    "futureTarotCount": [{
      "type": "vip",
      "usedCount": 0,
      "totalCount": 9999
    }, {
      "type": "vip",
      "usedCount": 0,
      "totalCount": 9999
    }],
    "payment": {
      "hasDailyHalfPrice": false,
      "discount": 0.5
    },
    "code": {}
  }
}
$done({body : JSON.stringify(objc)});
