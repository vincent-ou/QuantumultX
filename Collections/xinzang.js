/* 心脏+ — 解锁年卡、体验卡 / 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = api.995120.cn */

var body = $response.body;
var newYearCard = '\"yearCard\":{\"goodNo\" : "dc3c24a224cc41fe804108c856ebfd9c",\"status\" : 1,\"content\" : \"心脏+包年\" ,\"endTime\" : \"2099-09-09到期\",\"type\" : 3,\"serviceBalanceId\" : 2501498,\"goodName\" : "心脏+包年"}';
var newexperienceCard = '\"experienceCard\":{\"status\" : 1,\"content\" : \"体验卡剩余3次\",\"balanceNum\" : 99999999,\"endTime\" : \"2099-09-09到期\",\"balanceName\" : \"极速心电图（ECG）分析服务\",\"type\" : 1,\"serviceBalanceId\" : 9999999}';

body = body.replace(/\"endTime":".*?"/g, '\"endTime":"2099-09-09到期"');

body = body.replace(/\"hwMembershipDate":".*?"/g, '\"hwMembershipDate":"2099-09-09到期"');

body = body.replace(/\"terminalType":"\d+"/g, '\"terminalType":"0"');

body = body.replace(/\"result":\w+/g, '\"result":true');

body = body.replace(/\"yearCard\":\{.*?\}/g, newYearCard);
body = body.replace(/\"experienceCard\":\{.*?\}/g, newexperienceCard);

body = body.replace(/\"sex":\d+/g, '\"sex":1');

$done({body});