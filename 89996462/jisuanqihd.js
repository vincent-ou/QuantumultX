/* JiSuanQiHD — 计算器HD- 专业计算机
 * 原作者：89996462
 * 适配版本：1.9.6
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = www.40sishi.com
 */

var objc = JSON.parse($response.body);
    objc = {"data":{"userId":"olccz0","name":null,"gender":0,"avatar":null,"birthday":null,"mobile":null,"vipState":{"state":1,"forever":false,"startTime": 4094878055000,"expireTime": 4094878055000}},"code":1}
$done({body : JSON.stringify(objc)});
