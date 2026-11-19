/* 婚礼纪 — 会员信息改写
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广与原版链接，变量名中性化，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = *.hunliji.com */

var body = $response.body;
const AD = '/appApi/startAD/info';

if ($request.url.indexOf(AD) != -1){  body = body.replace(/\"data"/g, delete '\"data"');}
body = body.replace(/\"memberStatus":\d+/g, '\"memberStatus":1');
body = body.replace(/\"isSuccess":\w+/g, '\"isSuccess":true');
body = body.replace(/\"isLocked":\w+/g, '\"isLocked":false');
body = body.replace(/\"canChangeTitle":\w+/g, '\"canChangeTitle":true');
body = body.replace(/\"success":\w+/g, '\"success":true');
body = body.replace(/\"retCode":\d+/g, '\"retCode":0');
body = body.replace(/\"msg":"\w+"/g, '\"msg":"成功"');
body = body.replace(/\"clickBtnText":"(.*?)"/g, '\"clickBtnText":"永久会员"');

$done({body});
