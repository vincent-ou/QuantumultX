/* 团团记账 — 解锁订阅
 * 原作者：89996462
 * 适配版本：2.3.8
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = gs.gateway.gameley.cn
 */

var body = $response.body.replace(/normalVipBoolean":\w+/g,'normalVipBoolean":true')
.replace(/adVipBoolean":\w+/g,'adVipBoolean":true')
.replace(/adVipForever":\w+/g,'adVipForever":true')
.replace(/visitVipForever":\w+/g,'visitVipForever":true')
.replace(/visitVipBoolean":\w+/g,'visitVipBoolean":true')
.replace(/normalVipDt":\d+/g,'normalVipDt":8883007999999')
.replace(/adVipDt":\d+/g,'adVipDt":8884543999999')
.replace(/newPersonTaskFlag":\w+/g,'newPersonTaskFlag":true')
$done({ body });
