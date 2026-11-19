/* 懂法猫 — 懂法猫-裁判文书网司法案例检索法律法规大全合同审查法律师工具
 * 原作者：WeiGiegie
 * 适配版本：5.7
 * 清理整理：Muse — 去除作者推广与注释头，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = app.dongfamao.com,app.dongfamao.com:443
 */

let obj = JSON.parse($response.body);


if (obj.data) {
  obj.data.isVip = "Y";
}

if (obj.data) {
  obj.data.vipExpiryDate = "2099-12-31T23:59:59Z";  
}


$done({body: JSON.stringify(obj)});
