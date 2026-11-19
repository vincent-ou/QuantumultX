/* 全本小说&淘小说 — VIP 解锁
 * 原作者：WeiGiegie
 * 适配版本：2.3.1,2.8.2
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = tfbook.taoyuewenhua.net,tybook.taoyuewenhua.net
 */
var body=$response.body;var url=$request.url;var obj=JSON.parse(body);const p1="/task_account_ios.do?";const p2="/auth/account?adid";const p3="wx_";//cion
if(url.indexOf(p1)!=-1){obj.data.money=999880;obj.data.coins=999880;body=JSON.stringify(obj);}//vip
if(url.indexOf(p2)!=-1){obj.data.paymentUser=true;obj.data.isVip=true;body=JSON.stringify(obj);}//Login
if(url.indexOf(p3)!=-1){body=JSON.stringify(obj);}$done({body});