/* imagex — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.5.3
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.chatgdp4.com
 */

var objc = JSON.parse($response.body);

    objc = 
{
  "success" : true,
  "statusCode" : 200,
  "message" : "success",
  "data" : {
    "vipInfo" : {
      "isVip" : true,
      "isPermanentVip" : true,
      "vipExpiryTime" : 8888888888
    },
    "logined" : false
  }
}

$done({body : JSON.stringify(objc)});
