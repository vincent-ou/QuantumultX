/* 话本小说 — VIP 解锁
 * 原作者：89996462
 * 适配版本：2.5.2
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑；身份字段改取真实返回（原版写入作者身份/推广），逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = tfbook.taoyuewenhua.net, tybook.taoyuewenhua.net
 */

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const p1 = '/task_account_ios.do?';
const p2 = '/auth/account?adid';
const p3 = 'wx_';

//cion
if (url.indexOf(p1) != -1) {
    obj.data.money = 999999;
    obj.data.coins = 999999;
    body = JSON.stringify(obj);
}
//vip
if (url.indexOf(p2) != -1) {
    obj.data.paymentUser = true;
    obj.data.isVip = true;
    body = JSON.stringify(obj);
}
//Login
if (url.indexOf(p3) != -1) {
    body = JSON.stringify(obj);
}


$done({
    body
});
