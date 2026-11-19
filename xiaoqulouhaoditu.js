/* 小区楼号地图 — 快递外卖极速导航
 * 原作者：WeiGiegie
 * 适配版本：1.0.10
 * 清理整理：Muse — v2 2026-11-19 22:06：原版写 obj.data.trialEnd，但真实返回是扁平对象、无 data 字段，导致脚本一跑就崩、改写从未生效；真实会员字段是 isIOSVip/isAndroidVip/isHarmonyVip，改为置 true；试用期疑似由 createdDate 推算（创建后 7 天），一并把创建日期改到今天
 * [rewrite_local]
 * [mitm] hostname = mp.zhuzixi.cn
 */
var body = $response.body || "";
try {
  var obj = JSON.parse(body);
  if (obj && typeof obj === "object" && !Array.isArray(obj)) {
    var beforeVip = obj.isIOSVip;
    var beforeDate = obj.createdDate;
    if ("isIOSVip" in obj) obj.isIOSVip = true;
    if ("isAndroidVip" in obj) obj.isAndroidVip = true;
    if ("isHarmonyVip" in obj) obj.isHarmonyVip = true;
    obj.isActive = true;
    obj.isVip = true;
    var NOW = "2026-11-19 00:00:00";
    if ("createdDate" in obj) obj.createdDate = NOW;
    if ("createdDateApp" in obj) obj.createdDateApp = NOW;
    var FAR = "2099/01/01 00:00:00";
    ["trialEnd", "trialEndTime", "expireTime", "expireDate", "vipExpireTime", "endTime"].forEach(function (k) {
      if (k in obj) obj[k] = FAR;
    });
    if (obj.data && typeof obj.data === "object" && !Array.isArray(obj.data)) {
      obj.data.isActive = true;
      if ("trialEnd" in obj.data) obj.data.trialEnd = FAR;
    }
    console.log("[XQLH v2] isIOSVip " + beforeVip + "->" + obj.isIOSVip + " createdDate " + beforeDate + "->" + obj.createdDate);
  }
  $done({ body: JSON.stringify(obj) });
} catch (e) {
  console.log("[XQLH v2] parse error: " + e.message);
  $done({ body: body });
}
