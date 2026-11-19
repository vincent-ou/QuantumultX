/* 薄荷壁纸 — VIP 解锁
 * 原作者：89996462
 * 适配版本：1.17.11
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑；身份字段改取真实返回（原版写入作者身份/推广），逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = mars-prod.whalean.com
 */

var objc = JSON.parse($response.body);
var oldData = (objc && objc.data) || {};

    objc = 
{
  "data" : {
    "id" : 1040493,
    "deviceUnique" : "",
    "accountStatus" : 0,
    "memberEndTime" : 4092599349000,
    "memberType" : 1,
    "userName" : "",
    "ctime" : "2023-11-18 21:09:03",
    "mobilePhone" : "",
    "isMember" : 0,
    "lastLoginTime" : 1700312944000,
    "userAccount" : {
      "renewalMethod" : 1,
      "memberEndTime" : "9999-09-09 09:09:09",
      "memberFirstTime" : "2023-12-21 16:15:02"
    },
    "loginPlatform" : 5,
    "headImg" : ""
  },
  "code" : 200,
  "extra" : null,
  "message" : "ok",
  "success" : true,
  "path" : null,
  "timestamp" : 1703608020624,
  "error" : false
}


// 身份字段取真实返回，不用原版写死的作者账号信息。
var keep = ["id", "deviceUnique", "userName", "ctime", "mobilePhone", "lastLoginTime", "loginPlatform", "headImg", "accountStatus"];
for (var i = 0; i < keep.length; i++) {
  if (oldData[keep[i]] !== undefined) objc.data[keep[i]] = oldData[keep[i]];
}

$done({body : JSON.stringify(objc)});
