/* Felo — 解锁会员 / 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = translator.felo.me */

var obj = JSON.parse($response.body);

obj = {
  "status" : 200,
  "data" : {
    "active_time" : "2023-12-05T16:41:31+0000",
    "expire_time" : "2099-09-09T09:09:09+0000",
    "now" : "2023-12-05T16:42:06+0000",
    "user_product_total" : [
      {
        "freeze" : 0,
        "total_limit" : "UNLIMITED",
        "deduction_type" : "DURATIONS",
        "user_id" : "1777777777777777777",
        "product_item_type" : "TRANSLATOR_BENEFIT",
        "total" : 0,
        "balance" : 0,
        "user_product_total_id" : "1732077752393142273"
      }
    ],
    "pro" : true
  },
  "code" : "OK"
};

$done({body : JSON.stringify(obj)});
