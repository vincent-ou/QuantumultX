/* 人人视频 — 解锁会员
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = api.hujuvod.com, api.qwapp.top */

if ($response.body != 'undefined'){
var body = $response.body;
var obj = JSON.parse(body);
const urla = '/user/personal/information';
const urlb = '/app/drama/page';

if ($request.url.indexOf(urla) != -1){
  obj.data.user["vipInfo"] = { "level" : "3",        "valid" : true, "expiredTime" : 4092599349000 };
  obj.data.user.level = 3;
  obj.data.user.vipLevel = 3;
  body = JSON.stringify(obj);
}

if ($request.url.indexOf(urlb) != -1){
  body = body.replace(/\"canShowVip":\w+/g, '\"canShowVip":false');
  body = body.replace(/\"externalAds":\w+/g, '\"externalAds":false');
  body = body.replace(/\"feeMode":\w+/g, '\"feeMode":free');
  body = body.replace(/\"enable":\w+/g, '\"enable":true');
  body = body.replace(/\"canPlay":false/g, '\"canPlay":true');
}
$done({body});}
