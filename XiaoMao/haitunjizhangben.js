/* 海豚记账本 — 海豚记账本 VIP 解锁
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = book.haitunwallet.com
 */
// 获取相应数据
let obj = JSON.parse($response.body);
// 获取请求地址
let requestUrl = $request.url;
// 判断是否为匹配项
if (/^https:\/\/book\.haitunwallet\.com\/app\/vip\/status?/.test(requestUrl)) {
  obj.data.status = 1;
  obj.data.startTime = "2023-10-30";
  obj.data.endTime = "2222-02-22";
  obj.data.openTime = "2023-10-30";
  obj.data.level = 3;
} else if (
  /^https:\/\/book\.haitunwallet\.com\/app\/launchad?/.test(requestUrl)
) {
  obj.data.ads = [];
  obj.data.adInfo.showAd = false;
} else if (
  /^https:\/\/book\.haitunwallet\.com\/app\/config?/.test(requestUrl)
) {
  let list = {
    show_daka: "0",
    show_share: "0",
    show_wallet: "0",
    show_grade: "0",
    show_ad: "0",
  };

  obj.data = list;
}
// 重写数据
$done({ body: JSON.stringify(obj) });
