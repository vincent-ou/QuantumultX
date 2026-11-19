/* 话本小说 — 解锁 VIP
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = *.ihuaben.com */

var obj = JSON.parse($response.body);
const user = /api\/userinfo/;
const yuedu = /book\/app\/vipReadWaitSeconds/;
const authorinfo = /function\/bookservice\/authorInfo/;
const book = /book\/app\/book/;

if(user.test($request.url)){
   obj["isPaymentMember"] = true;
   obj["isMember"] = true;
   obj["testGroup"] = "D";
   obj["isContractAuthor"] = true;
   obj["memberEndTime"] = "2099-09-09 09:09:09";
   obj["isRealNameCertification"] = true;
}

if(yuedu.test($request.url)){
   obj.hpFee = 1;
   obj.isDimeMemberExperinceAvailable = true;
}

if(authorinfo.test($request.url)){
   obj.authorInfo["userStatus"] = 1;
   obj.authorInfo["isMember"] = true;
}

if(book.test($request.url)){
   obj.book.marks.isMember = true;
}

$done({body : JSON.stringify(obj)});