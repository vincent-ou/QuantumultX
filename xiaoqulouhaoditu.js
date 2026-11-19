/* 小区楼号地图 — 快递外卖极速导航
 * 原作者：WeiGiegie
 * 适配版本：1.0.10 / 2.0.2
 * 清理整理：Muse — getUserById 返回扁平对象（无 data 字段），直接改 isIOSVip 等标志位；2026-11-19 在 2.0.2 上验证可用
 * [rewrite_local]
 * [mitm] hostname = mp.zhuzixi.cn
 */
var body = $response.body || "";
try {
  var obj = JSON.parse(body);
  if (obj && typeof obj === "object" && !Array.isArray(obj)) {
    var before = obj.isIOSVip;
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
    console.log("[XQLH] isIOSVip " + before + "->" + obj.isIOSVip);
  }
  $done({ body: JSON.stringify(obj) });
} catch (e) {
  $done({ body: body });
}
