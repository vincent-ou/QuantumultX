/* 普通话测试 — &内容
 * 原作者：89996462
 * 适配版本：5.9.20
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.hcreator.cn
 */

var body = $response.body.replace(/"vipType":0/g,'"vipType":1')
.replace(/"expireTime1":null/g,'"expireTime1":1963926472000')
.replace(/"startTime1":null/g,'"startTime1":1663926472000')
.replace(/"vip":false/g,'"vip":true')
.replace(/"vipName":"非会员"/g,'"vipName":"会员"')
.replace(/"day":0/g,'"day":3472')
.replace(/"vipRank":\d/g,'"vipRank":3')
.replace(/"joinType":\w+/g,'"joinType":true')
$done({ body });
