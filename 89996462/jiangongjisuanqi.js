/* 建工计算器 — 建工计算器
 * 原作者：89996462
 * 适配版本：3.8.5
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = calc.kuaicad.com
 */

var originalResponse = $response.body;

var lovebaby = JSON.parse(originalResponse);
lovebaby.data.type = 3;
lovebaby.data.expiresTime = "2099-08-03 16:11:22";
lovebaby.data.isExpires = false;
var modifiedResponseString = JSON.stringify(lovebaby);
$done({
  body: modifiedResponseString
});
