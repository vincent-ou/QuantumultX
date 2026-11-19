/* 新知卫星地图 — VIP 解锁
 * 原作者：89996462
 * 适配版本：4.3.1
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = a.xinzhi.space
 */

var out = $response.body;
var obj =  JSON.parse(out);

var vipInfo = {
  "vip_type":"永久会员",
  "vip_expire": "2999-01-01 00:00:00",
  "is_vip": 1,
  "vip_day": 99999
}

for (let key in obj.data) {
  if (vipInfo.hasOwnProperty(key)) {
     obj.data[key] = vipInfo[key]
  }
}


out = JSON.stringify(obj);
$done(out);
