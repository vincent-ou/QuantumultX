/* FanYiQuanNengWang — 解锁订阅
 * 原作者：89996462
 * 适配版本：9.0.1
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.528529.com
 */

var objc = JSON.parse($response.body);
    objc = {
  "msg" : "success",
  "data" : [
    {
      "due_time" : "2114-10-02 23:09:13",
      "vip_type" : "vip_free_test",
      "now_time" : "2023-09-07 23:18:27",
      "isExpire" : false,
      "isExist" : true,
      "in_app" : "[{\"quantity\": \"1\", \"product_id\": \"vip_1_year_auto\", \"transaction_id\": \"200001763297663\", \"original_transaction_id\": \"200001768287883\", \"purchase_date\": \"2023-09-07 15:09:13 Etc/GMT\", \"purchase_date_ms\": \"1694099353000\", \"purchase_date_pst\": \"2023-09-07 08:09:13 America/Los_Angeles\", \"original_purchase_date\": \"2023-09-07 15:09:14 Etc/GMT\", \"original_purchase_date_ms\": \"1694099354000\", \"original_purchase_date_pst\": \"2023-09-07 08:09:14 America/Los_Angeles\", \"expires_date\": \"2114-10-02 15:09:13 Etc/GMT\", \"expires_date_ms\": \"4567891456000\", \"expires_date_pst\": \"2114-10-02 08:09:13 America/Los_Angeles\", \"web_order_line_item_id\": \"200000789152229\", \"is_trial_period\": \"true\", \"is_in_intro_offer_period\": \"false\", \"in_app_ownership_type\": \"PURCHASED\"}]"
    }
  ],
  "code" : 1
}

$done({body : JSON.stringify(objc)});
