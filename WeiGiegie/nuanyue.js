/* 暖悦 — ai大姨妈记录月经期助手
 * 原作者：WeiGiegie
 * 适配版本：1.7.1
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = gs.gateway.gameley.cn
 */
let obj = JSON.parse($response.body);
if (obj.info) {
  obj.info.adRequiredVipBoolean = true;
  obj.info.adRequiredVip = 4102444799000;
  obj.info.normalVipBoolean = true;
  obj.info.normalVipForever = true;
  obj.info.normalVipDt = 4102444799000;
}
$done({
  body: JSON.stringify(obj)
});