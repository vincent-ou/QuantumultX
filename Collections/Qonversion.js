/* Qonversion — 解锁会员
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = api.qonversion.io */


var resp = JSON.parse($response.body);
const headers = $request.headers;
const ua = headers['User-Agent'] || headers['user-agent'];
const times = Math.floor(Date.now() / 1000);  // 获取当前时间戳

const list = {
  'AnkiPro': { name: "Premium", id: "com.ankipro.app.lifetime", store_id: "com.ankipro.app.lifetime" },  //AnkiPro
  'SwiftCompiler': { name: "premium", id: "premium.forever", store_id: "com.hassantaleb.SwiftCompiler.premium.forever" }  //Swift Compiler
};

for (const key in list) {
  if (new RegExp(`^${key}`, 'i').test(ua)) {
    const { name, id, store_id } = list[key];
    const data = {
      "id": id,
      "type": 0,
      "store_id": store_id,
      "duration": 99999
    };
    resp.data["products"].push(data);
    resp.data["user_products"] = [data];
    resp.data["permissions"] = [
      {
        "id" : name,
        "trial_start_timestamp" : times,
        "active" : 1,
        "started_timestamp" : times,
        "grant_type" : "purchase",
        "associated_product" : id,
        "source" : "appstore",
        "renews_count" : 0,
        "store_transactions" : [
          {
            "ownership_type" : "owner",
            "transaction_id" : "490001838737385",
            "environment" : "production",
            "transaction_timestamp" : times,
            "expiration_timestamp" : 4092599349,
            "original_transaction_id" : "490001314520000",
            "type" : "trial_started"
          }
        ],
        "current_period_type" : "trial",
        "expiration_timestamp" : 4092599349,
        "renew_state" : 1
      }
    ];
    break;
  }
}

$done({body: JSON.stringify(resp)});
