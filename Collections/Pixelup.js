/* Pixelup — 解锁会员 / 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = receipt-verifier.cdwapi.com */

var obj = JSON.parse($response.body);

obj = {
  "status": {
    "message": "Success",
    "code": 200
  },
  "payload": {
    "is_intro_offer": true,
    "latest_transaction_id": "300001314520000",
    "active": true,
    "is_renewal": false,
    "expires_at": 4092599349000,
    "auto_renew_status": "1",
    "grace_expires_at": 4092599349000,
    "product_id": "pixelup.pro.freetrial.1year.t1",
    "is_in_grace": true,
    "started_at": 1666666666666,
    "purchased_product_identifiers": [
      "pixelup.pro.freetrial.1year.t1"
    ],
    "latest_transaction_time": 1666666666666,
    "subscription_id": "300001314520000",
    "is_trial": true,
    "is_family_share": true
  }
};

$done({body : JSON.stringify(obj)});