/* 小区楼号地图 — 调试版：打印响应结构 + 容错改写
 * 原作者：WeiGiegie
 * 适配版本：1.0.10
 * 清理整理：Muse — 调试用，正式版勿用
 * [rewrite_local]
 * [mitm] hostname = mp.zhuzixi.cn
 */
var body = $response.body || "";
try {
  var obj = JSON.parse(body);
  // 打印结构：顶层 key 和 data 的 key（不打印敏感值）
  var topKeys = Object.keys(obj);
  var dataKeys = (obj.data && typeof obj.data === "object") ? Object.keys(obj.data) : null;
  console.log("[XQLH] url=" + ($request.url || ""));
  console.log("[XQLH] topKeys=" + JSON.stringify(topKeys));
  console.log("[XQLH] dataKeys=" + JSON.stringify(dataKeys));
  console.log("[XQLH] isActive=" + JSON.stringify(obj.isActive) + " data.isActive=" + JSON.stringify(obj.data && obj.data.isActive));
  console.log("[XQLH] trialEnd=" + JSON.stringify(obj.trialEnd) + " data.trialEnd=" + JSON.stringify(obj.data && obj.data.trialEnd));
  console.log("[XQLH] data=" + JSON.stringify(obj.data).slice(0, 600));

  // 容错改写：顶层和 data 层都改，多个候选字段名都改
  var FAR = "2099/01/01 00:00:00";
  function setTrial(o) {
    if (!o || typeof o !== "object") return;
    o.isActive = true;
    o.isVip = true;
    o.vip = true;
    o.memberStatus = 1;
    o.trialEnd = FAR;
    o.trialEndTime = FAR;
    o.expireTime = FAR;
    o.expireDate = FAR;
    o.vipExpireTime = FAR;
    o.endTime = FAR;
  }
  setTrial(obj);
  if (obj.data && typeof obj.data === "object") setTrial(obj.data);
  $done({ body: JSON.stringify(obj) });
} catch (e) {
  console.log("[XQLH] parse/fix error: " + e.message + " bodyHead=" + body.slice(0, 200));
  $done({ body: body });
}
