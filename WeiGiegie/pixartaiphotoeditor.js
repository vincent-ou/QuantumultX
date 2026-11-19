/* pixart ai photo editor — 会员解锁
 * 原作者：WeiGiegie
 * 适配版本：1.1.0
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.qonversion.io
 */
var body = $response["body"];
let obj = JSON["parse"]($response["body"]);
obj = {
  "success": !![],
  "data": {
    "uid": "QON_e43e8b5ce15c441b8933a502e931e54f",
    "products": [{
      "id": "qom.grisoft.pixart.weekly",
      "type": 0x0,
      "store_id": "com_grisoft_pixart_weekly",
      "duration": 0x0
    }, {
      "id": "qom_grisoft_pixart_monthly",
      "type": 0x0,
      "store_id": "com_grisoft_pixart_monthly",
      "duration": 0x1
    }, {
      "id": "qom_grisoft_pixart_yearly",
      "type": 0x0,
      "store_id": "com_grisoft_pixart_yearly",
      "duration": 0x4
    }],
    "offerings": [{
      "id": "main",
      "tag": 0x1,
      "products": [{
        "id": "qom.grisoft.pixart.weekly",
        "type": 0x0,
        "store_id": "com_grisoft_pixart_weekly",
        "duration": 0x0
      }, {
        "id": "qom_grisoft_pixart_monthly",
        "type": 0x0,
        "store_id": "com_grisoft_pixart_monthly",
        "duration": 0x1
      }, {
        "id": "qom_grisoft_pixart_yearly",
        "type": 0x0,
        "store_id": "com_grisoft_pixart_yearly",
        "duration": 0x4
      }]
    }, {
      "id": "offering_ios",
      "tag": 0x0,
      "products": [{
        "id": "qom_grisoft_pixart_yearly",
        "type": 0x0,
        "store_id": "com_grisoft_pixart_yearly",
        "duration": 0x4
      }, {
        "id": "qom_grisoft_pixart_monthly",
        "type": 0x0,
        "store_id": "com_grisoft_pixart_monthly",
        "duration": 0x1
      }, {
        "id": "qom.grisoft.pixart.weekly",
        "type": 0x0,
        "store_id": "com_grisoft_pixart_weekly",
        "duration": 0x0
      }]
    }],
    "products_permissions": {
      "qom.grisoft.pixart.weekly": ["muimerP".split("").reverse().join("")],
      "qom_grisoft_pixart_yearly": ["muimerP".split("").reverse().join("")],
      "qom_grisoft_pixart_monthly": ["muimerP".split("").reverse().join("")]
    },
    "user_products": [{
      "id": "qom.grisoft.pixart.weekly",
      "type": 0x0,
      "store_id": "com_grisoft_pixart_weekly",
      "duration": 0x0
    }],
    "timestamp": 0x665d8372,
    "permissions": [{
      "id": "Premium",
      "trial_start_timestamp": 0x665d834b,
      "active": 0x1,
      "started_timestamp": 0x665d834b,
      "grant_type": "purchase",
      "associated_product": "qom.grisoft.pixart.weekly",
      "source": "appstore",
      "renews_count": 0x0,
      "store_transactions": [{
        "ownership_type": "owner",
        "transaction_id": "710001661083319",
        "environment": "production",
        "transaction_timestamp": 0x665d834b,
        "expiration_timestamp": 0x790c11425,
        "original_transaction_id": "710001661083319",
        "type": "trial_started"
      }],
      "current_period_type": "trial",
      "expiration_timestamp": 0x790c11425,
      "renew_state": 0x1
    }],
    "apple_extra": {
      "original_application_version": "34"
    }
  }
};
$done({
  "body": JSON["stringify"](obj)
});