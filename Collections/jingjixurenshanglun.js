/* 经济学人商论 — 解锁订阅 / 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = api.hummingbird.businessreview.global */

var obj = JSON.parse($response.body);

obj = {
  "subscription_type" : "Paid",
  "account_member_since" : "Jul 17th, 2023",
  "subscriptions" : [
    {
      "id" : "",
      "store_product_id" : "GBR Yearly SO-0920",
      "state" : "paid",
      "active" : true,
      "subscription_data" : "{&#34;stripe_event_id&#34;:&#34;&#34;,&#34;charge_id&#34;:&#34;&#34;}",
      "payment_type" : "alipay",
      "stripe_event_id" : "",
      "amount" : 29900,
      "source" : "web-alipay",
      "created_date" : {
        "$date" : {
          "$numberLong" : "1666666666666"
        }
      },
      "purchase_date" : {
        "sec" : "1666666666"
      },
      "platform" : "web",
      "charge_id" : "",
      "renewal_flag" : true,
      "payment_frequency" : "GBR Yearly SO-0920",
      "account" : {
        "$id" : {
          "$oid" : ""
        },
        "$ref" : "accounts"
      },
      "expiration_date" : {
        "sec" : "4092599349"
      }
    }
  ],
  "error" : false
};

$done({body : JSON.stringify(obj)});
