/* 梦剧场 — VIP 解锁
 * 原作者：89996462
 * 适配版本：2.0.1
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = tool.qgzyry-gov.com
 */

var objc = JSON.parse($response.body);

    objc = {"msg":"成功","code":0,"data":{"member":true,"permanentMember":false,"memberDeadline":"2099-09-23","memberLevelType":1,"memberLevelName":null,"buyCountList":[],"extraData":null},"success":true}


$done({body : JSON.stringify(objc)});
