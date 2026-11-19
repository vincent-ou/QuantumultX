/* 迷你小组件全家桶 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.1.4
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = fufei.haitubangong.com
 */

try {
  let obj = JSON.parse($response.body);

  let vipInfo = {
    "forever": 1,
    "vipname": "永久会员",
    "expired_at": "9999-09-09 00:00:00"
  };

  obj.data.vip = vipInfo;

  $done({ body: JSON.stringify(obj) });
} catch (error) {
  console.error('解析或处理响应体时出错:', error);
  $done({ error: '无法处理响应体' });
}
