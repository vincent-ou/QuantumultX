/* 朝暮计划 — VIP 解锁
 * 原作者：89996462
 * 适配版本：1.7.7
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = app.zomoplan.com
 */

var body = $response.body.replace(/"vipStatus":\d/g,'"vipStatus":1')
.replace(/"vipType":\d/g,'"vipType":3')
.replace(/"vipExpiresDate":".*?"/g,'"vipExpiresDate":"2099-11-11"')
.replace(/"userVipStatus":\d/g,'"userVipStatus":1')
.replace(/"userVipStatusDesc":"普通用户"/g,'"userVipStatusDesc":"Vip用户"')
$done({ body });
