/*************************************
项目名称：Fimo-复古胶片相机
原版作者：@ddm1023 (chxm1023/Rewrite, 2025-01-16, jsjiami.com.v5 加密)
解密整理：Muse — 已解密验证，去除 BoxJS 开关与反调试代码
           原版的 BoxJS 开关包在 if(typeof $rocket!=="undefined") 里，
           $rocket 是 Shadowrocket 的全局变量，QX 里不存在，
           所以在 QX 下那个开关本来就不生效，解锁是无条件执行的。

解锁内容(已验证)：
  - user 接口：全部胶片 pay -> sync；subscribe 设为 valid + forever + 到期 2099-09-09
  - apple/certificate：伪造一张 2099-09-09 到期的收据 (fimopro_1, PURCHASED)
  - config：去掉"新用户抽奖活动"横幅
  - startPopConfig：清空启动弹窗配置

[rewrite_local]
^https?:\/\/fimo\.appfimo\.com\/fimo-.*\/(user|apple\/certificate|config|startPopConfig|filmAll) url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/Fimo.js

[mitm]
hostname = fimo.appfimo.com
*************************************/

var ddm = JSON.parse($response.body);
var url = $request.url;

// 用户信息：解锁全部胶片 + 会员永久有效(至 2099-09-09)
if (/fimo-user\/user/.test(url)) {
  if (Array.isArray(ddm.films)) {
    ddm.films.forEach(function (film) {
      if ("pay" in film) film.pay = "sync";
    });
  }
  ddm.subscribe = { valid: true, forever: 1, endTime: 4092599349 }; // 2099-09-09
  ddm.filmsCommonOrder = ["fimoBlackTea50", "fimoDiary400", "fimoLMcolor100_w", "fimopro_3", "fimoUltramax400", "fimoTokyo500_w"];
}

// 配置：去掉"新用户抽奖活动"横幅
if (/config/.test(url)) {
  if (Array.isArray(ddm.storeBanner)) {
    ddm.storeBanner = ddm.storeBanner.filter(function (item) {
      return item.name !== "新用户抽奖活动";
    });
  }
}

// 启动弹窗：清空
if (/startPopConfig/.test(url)) {
  ddm = {};
}

// 苹果凭证：伪造一张 2099-09-09 到期的收据
if (/fimo-user\/apple\/certificate/.test(url)) {
  var data = {
    quantity: "1",
    purchase_date_ms: "1694250549000",
    expires_date: "2099-09-09 09:09:09 Etc/GMT",
    expires_date_pst: "2099-09-09 06:06:06 America/Los_Angeles",
    is_in_intro_offer_period: "false",
    transaction_id: "490001314520000",
    is_trial_period: "false",
    original_transaction_id: "490001314520000",
    purchase_date: "2023-09-09 09:09:09 Etc/GMT",
    product_id: "fimopro_1",
    original_purchase_date_pst: "2023-09-09 02:09:10 America/Los_Angeles",
    in_app_ownership_type: "PURCHASED",
    original_purchase_date_ms: "1694250550000",
    web_order_line_item_id: "490000123456789",
    expires_date_ms: "4092599349000",
    purchase_date_pst: "2023-09-09 02:09:09 America/Los_Angeles",
    original_purchase_date: "2023-09-09 09:09:10 Etc/GMT",
    original_purchase_date_pst: "2023-09-09 02:09:10 America/Los_Angeles"
  };
  ddm.receipt = ddm.receipt || {};
  ddm.receipt.in_app = [data];
  ddm.latest_receipt = "ddm1023";
  ddm.latest_receipt_info = [Object.assign({}, data, { subscription_group_identifier: "20919732" })];
  ddm.pending_renewal_info = [{
    product_id: "fimopro_1",
    original_transaction_id: "490001314520000",
    auto_renew_product_id: "fimopro_1",
    auto_renew_status: "1"
  }];
}

$done({ body: JSON.stringify(ddm) });
