/* 小区楼号地图 — 快递外卖极速导航
 * 原作者：WeiGiegie
 * 适配版本：1.0.10
 * 清理整理：Muse — v3-debug 2026-11-19 22:19：临时调试版，打印 getUserById 完整返回，定位试用期来源；确认后恢复正式版
 * [rewrite_local]
 * [mitm] hostname = mp.zhuzixi.cn
 */
var body = $response.body || "";
try {
  var obj = JSON.parse(body);
  if (obj && typeof obj === "object" && !Array.isArray(obj)) {
    var url = ($request && $request.url) || "";
    if (url.indexOf("getUserById") !== -1) {
      console.log("[XQLH v3] RAW=" + body);
    }
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
    if (url.indexOf("getUserById") !== -1) {
      console.log("[XQLH v3] FIXED=" + JSON.stringify(obj));
    }
  }
  $done({ body: JSON.stringify(obj) });
} catch (e) {
  console.log("[XQLH v3] parse error: " + e.message);
  $done({ body: body });
}
