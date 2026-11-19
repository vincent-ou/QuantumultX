/* 小区楼号地图 — 快递外卖极速导航
 * 原作者：WeiGiegie
 * 适配版本：1.0.10
 * 清理整理：Muse — 2026-11-19 修复：原版写 obj.data.trialEnd，但真实返回是扁平对象、无 data 字段，导致脚本一跑就崩、改写从未生效；真实会员字段是 isIOSVip/isAndroidVip/isHarmonyVip，改为置 true
 * [rewrite_local]
 * [mitm] hostname = mp.zhuzixi.cn
 */
var body = $response.body || "";
try {
  var obj = JSON.parse(body);
  if (obj && typeof obj === "object" && !Array.isArray(obj)) {
    // 真实会员字段（getUserById 扁平返回）
    if ("isIOSVip" in obj) obj.isIOSVip = true;
    if ("isAndroidVip" in obj) obj.isAndroidVip = true;
    if ("isHarmonyVip" in obj) obj.isHarmonyVip = true;
    obj.isActive = true;
    obj.isVip = true;
    // 试用期字段（如存在则延到 2099）
    var FAR = "2099/01/01 00:00:00";
    ["trialEnd", "trialEndTime", "expireTime", "expireDate", "vipExpireTime", "endTime"].forEach(function (k) {
      if (k in obj) obj[k] = FAR;
    });
    // 嵌套 data（如个别接口有则同样处理，容错）
    if (obj.data && typeof obj.data === "object" && !Array.isArray(obj.data)) {
      obj.data.isActive = true;
      if ("trialEnd" in obj.data) obj.data.trialEnd = FAR;
    }
  }
  $done({ body: JSON.stringify(obj) });
} catch (e) {
  $done({ body: body });
}
