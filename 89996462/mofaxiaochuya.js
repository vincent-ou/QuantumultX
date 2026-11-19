/* 魔法消除鸭 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.1.4
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = clean.tzdoc.com
 */

var objc = JSON.parse($response.body);

    objc = 
{
  "userID" : 10205990,
  "openWx" : true,
  "userName" : null,
  "state" : true,
  "vipDate" : "2099-09-18T00:00:00",
  "photo" : "https://thirdwx.qlogo.cn/mmopen/vi_32/kb23QfuvB6z1nZWCTUEMvdek6iaqAR3vjeRtgHUgl7QPgdHfPmuQSiabJseyfFUA0MGjG9wXWU6d7pxLViaIeNefg/132",
  "nowDate" : "2024-09-18T00:00:00",
  "freeNum" : 3
}     

$done({body : JSON.stringify(objc)});
