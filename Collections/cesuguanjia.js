/* 测速管家 — 解锁会员
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = iap.etm.tech */


var resp = JSON.parse($response.body);

resp = {
  "entitlements" : [
    {
      "redeem" : {

      },
      "expires_date_ms" : 4092599349000,
      "purchase_date_ms" : 1671198216000,
      "product_identifier" : "Collart_Promium_Business_Yearly_Promo_20230612",
      "is_in_intro_offer_period" : false,
      "environment" : "Production",
      "auto_renew" : false,
      "is_in_trial_period" : false,
      "entitlement_id" : "premium"
    }
  ],
  "is_valid" : true
}


$done({body : JSON.stringify(resp)});
