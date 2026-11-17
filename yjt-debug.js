/*******************************
易截图2 调试版：打印 1jietu.com/apiv2/* 的真实返回，同时保留原解锁改写
用法：把 QX 里 YiJieTu.snippet 的规则换成 YiJieTu-debug.snippet，
打开易截图进一次「我的」页，再点一次去水印，
然后去 QX「脚本记录」里找 YJT-DEBUG 的行，把 /apiv2/user 那条的 BODY 发我（token 打码）。
用完换回正式版。
*******************************/

var url = $request.url;
var body = $response.body || "";
console.log("YJT-DEBUG URL: " + url);
console.log("YJT-DEBUG BODY: " + body.slice(0, 3000));
body = body.replace(/vip":"\d"/g, 'vip":"1"').replace(/group_id":"\d"/g, 'group_id":"3"');
$done({ body });
