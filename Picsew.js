/*
Picsew 拼图 — 标准版 & 专业版解锁

原版：https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/XiaoMaoPicsew.js
逻辑原版：https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/psw.js
（逻辑原版是 sojson.v4 混淆，已还原；还原文件见 psw-decoded.js）
清理整理：Muse — 仅去作者推广、加 bundle_id 保护，逻辑与数值与原版一致。
           拦截苹果 buy.itunes.apple.com/verifyReceipt，替换 receipt 为
           伪造的购买记录（Picsew Pro + 免费升级，到期 2222-02-02）。
           注意：
             - 最高支持 Picsew 3.9.5，更高版本可能失效。
             - 这是共享接口（所有 App 的收据验证都走这里），原版不分 App
               全都替换。清理版加了 bundle_id 检查，只对 Picsew
               （com.sugarmo.ScrollClip）的收据改写，其它 App 原样放行，
               避免互相干扰。但按原作者说明，用完请关掉脚本。
             - 通知里的 pixiv 图片链接（作者推广）已去掉，只留成功提示。
             - 用法（按原版）：QX 开启脚本后打开 Picsew > 右上角按钮 >
               高级功能 > 自动解锁专业版；若未成功，点高级功能右上角
               「恢复购买」。成功后有关掉脚本的提示，即可关闭。

[rewrite_local]
https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/Picsew.js

[mitm]
hostname = buy.itunes.apple.com
*/

var obj = JSON.parse($response.body);
var requestUrl = $request.url;

if (/^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt/.test(requestUrl)) {
  // 只改写 Picsew 的收据，其它 App 的收据原样放行
  if (obj && obj.receipt && obj.receipt.bundle_id === "com.sugarmo.ScrollClip") {
    var receipt = {
      receipt_type: "Production",
      bundle_id: "com.sugarmo.ScrollClip",
      in_app: [
        {
          quantity: "2",
          purchase_date_ms: "1692026680000",
          transaction_id: "666666666666666",
          original_transaction_id: "666666666666666",
          product_id: "com.sugarmo.ScrollClip.pro",
          in_app_ownership_type: "PURCHASED",
          original_purchase_date_ms: "1692026680000"
        },
        {
          quantity: "1",
          purchase_date_ms: "1692026680000",
          transaction_id: "666666666666667",
          original_transaction_id: "666666666666667",
          product_id: "com.sugarmo.ScrollClip.freeUpgrade",
          in_app_ownership_type: "PURCHASED",
          original_purchase_date_ms: "1692026680000"
        }
      ],
      adam_id: 1111111111,
      receipt_creation_date_pst: "2023-08-14 08:25:04 America/Los_Angeles",
      request_date: "2023-08-14 15:27:40 Etc/GMT",
      request_date_pst: "2023-08-14 08:27:40 America/Los_Angeles",
      version_external_identifier: 666666666,
      request_date_ms: "1692026860531",
      original_purchase_date_pst: "2023-08-14 08:24:40 America/Los_Angeles",
      application_version: "3206",
      original_purchase_date_ms: "1692026680000",
      receipt_creation_date_ms: "1691972704000",
      original_application_version: "2503",
      download_id: 666666666666666666,
      latest_receipt_info: [
        {
          quantity: "2",
          purchase_date_ms: "1692026680000",
          transaction_id: "666666666666666",
          original_transaction_id: "666666666666666",
          product_id: "com.sugarmo.ScrollClip.pro",
          in_app_ownership_type: "PURCHASED",
          original_purchase_date_ms: "1692026680000",
          is_in_intro_offer_period: "false",
          is_trial_period: "false",
          expires_date: "2222-02-02 02:02:02 Etc/GMT",
          expires_date_pst: "2222-02-02 02:02:02 America/Los_Angeles",
          expires_date_ms: "7955085722000"
        },
        {
          quantity: "1",
          purchase_date_ms: "1692026680000",
          transaction_id: "666666666666667",
          original_transaction_id: "666666666666667",
          product_id: "com.sugarmo.ScrollClip.freeUpgrade",
          in_app_ownership_type: "PURCHASED",
          original_purchase_date_ms: "1692026680000",
          is_in_intro_offer_period: "false",
          is_trial_period: "false",
          expires_date: "2222-02-02 02:02:02 Etc/GMT",
          expires_date_pst: "2222-02-02 02:02:02 America/Los_Angeles",
          expires_date_ms: "7955085722000"
        }
      ],
      pending_renewal_info: [
        {
          product_id: "com.sugarmo.ScrollClip",
          original_transaction_id: "666666666666666",
          auto_renew_product_id: "com.sugarmo.ScrollClip.pro",
          auto_renew_status: "2"
        },
        {
          product_id: "com.sugarmo.ScrollClip",
          original_transaction_id: "666666666666667",
          auto_renew_product_id: "com.sugarmo.ScrollClip.freeUpgrade",
          auto_renew_status: "1"
        }
      ],
      status: 0,
      environment: "Production"
    };
    obj.receipt = receipt;
    $notify("Picsew 解锁成功", "", "专业版已解锁，可关掉此脚本。");
  }
}

$done({ body: JSON.stringify(obj) });
