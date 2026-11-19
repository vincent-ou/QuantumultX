/* 录音笔记 — VIP 解锁
 * 原作者：89996462
 * 适配版本：31.2
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = appss.rhinoxlab.com
 */

var ojbk = $response.body;
var obj =  JSON.parse(ojbk);

if($request.url.indexOf("/app/account/getAccountInfo") != -1) {
    obj.result.type = "VIP";
    obj.result.freeFlag = "YES";
    obj.result.vipGroupInfos = [
       {
        "groupType" : "TYPE_ONE",
        "vipType" : "VIP",
        "autoPay" : "YES"
      }
    ];
}

ojbk = JSON.stringify(obj);
$done(ojbk);
