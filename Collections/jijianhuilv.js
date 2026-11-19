/* 极简汇率 — 解锁会员
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = xremit.xcurrency.com, explorer.tratao.com */


var resp = JSON.parse($response.body);

resp.data = [
    {
      "uuid" : "D53A4774-B52D-4B2C-A9EB-2ECAD9999999",
      "id" : "dd9ce407ea984500a65957c2e0659999",
      "vipPayUnit" : "year",
      "benefits" : [

      ],
      "expire" : "2099-09-09 09:09:09",
      "vipStatus" : "paid",
      "update" : "2023-10-23 08:21:57",
      "vipLevel" : "senior",
      "userId" : "93fa3b800daa451646a5825c249c9999",
      "vipPayNum" : 1,
      "vipPayType" : "auto_sub",
      "created" : "2023-10-23 08:21:52"
    }
  ];

$done({body : JSON.stringify(resp)});
