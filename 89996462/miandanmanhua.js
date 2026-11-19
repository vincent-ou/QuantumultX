/* 免耽漫画 — 免耽漫画
 * 原作者：89996462
 * 适配版本：2.8.8
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = app.lalaldc.cn
 */

var body = $response.body;
var obj = JSON.parse(body);

obj.data.isvip = 1,
obj.data.vipStatus = 1,     
obj.data.vipEndDate = "9999-01-01", 
obj.data.vipEndDateTime = "9999-01-01 10:19:38"


body = JSON.stringify(obj);
$done({body});
