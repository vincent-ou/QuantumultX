/* Lispod — lispod分级播客-无痛英语听力自由
 * 原作者：WeiGiegie
 * 适配版本：1.4.3
 * 清理整理：Muse — 去除作者推广与注释头，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.lispod.cn
 */

const body = $response.body;

try {
  const obj = JSON.parse(body);
  
  if (obj && obj.data) {
    obj.data.isVip = true;
    obj.data.endDate = "2099-12-31 23:59:59";
    obj.data.startDate = "2024-01-01 00:00:00";
    obj.data.freeMinutes = 1000;
    obj.data.lispodLevel = "VIP";
  }
  
  $done({body: JSON.stringify(obj)});
} catch (error) {
  $done({});
}
