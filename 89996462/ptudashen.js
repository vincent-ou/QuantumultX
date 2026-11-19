/* P图大神 — 解锁订阅
 * 原作者：89996462
 * 适配版本：2.0.7
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = appss.linhongshi.com
 */

var objc = JSON.parse($response.body);

    objc = {
  "success" : true,
  "result" : {
    "vipExpireTime" : "2999-09-09 09:09:09",
    "dataId" : "10171807697013995683",
    "vipGroupInfos" : [
      {
        "groupType" : "TYPE_ONE",
        "vipType" : "VIP",
        "autoPay" : "NO"
      }
    ],
    "type" : "VIP"
  },
  "returnCode" : "200",
  "timeOut" : false
}

$done({body : JSON.stringify(objc)});
