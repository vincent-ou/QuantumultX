/* 网上厨房 — 家常菜谱美食烘焙教程
 * 原作者：WeiGiegie
 * 适配版本：16.8.99
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.ecook.xiaochushuo.com
 */
function modifyAll(obj) {
  if (!obj || typeof obj !== "object") return;
  const modifications = {
    "isMember": true,
    "free": true,
    "evaluated": true,
    "type": "VIP",
    "medal": "gold"
  };
  function applyMods(obj) {
    for (let key in obj) {
      if (modifications.hasOwnProperty(key)) {
        if (key === "type" && obj[key] !== "Rookie") {
          continue;
        }
        if (key === "medal" && obj[key] !== "iron") {
          continue;
        }
        obj[key] = modifications[key];
      } else if (typeof obj[key] === "object") {
        applyMods(obj[key]);
      }
    }
  }
  applyMods(obj);
}
let obj = JSON.parse($response.body);
modifyAll(obj);
$done({
  body: JSON.stringify(obj)
});