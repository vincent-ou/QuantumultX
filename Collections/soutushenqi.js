/* 搜图神器 — 解锁会员
 * 原作者：chxm1023
 * 适配版本：1.7.3
 * 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = *.soutushenqi.com */


var body = $response.body;
var resp = JSON.parse(body);
const user = /account\/(token|info)/;
const aicl = /cykj_community\/(config\/tools\/.+|ai_draw\/self.+)/;
const tcad = /home\/dialog/;

if(user.test($request.url)){
   resp.data = {...resp.data, 
       "vipPastDueTime" : 4092599349,
       "vipLabelLevel" : 4,
       "vipLabel" : "Lv10元老捐赠会员",
       "pcVipPastDueTime" : 4092599349,
       "vipType" : 1024,
       "isVirtual" : 1,
       "vitalityPcVipPastDueTime" : 4092599349,
       "pcVipType" : 1024,
       "vitalityVipPastDueTime" : 4092599349
     };
}

if(aicl.test($request.url)){
   body = body.replace(/\"surplus":\d+/g, '\"surplus":99');
   body = body.replace(/\"total":\d+/g, '\"total":99');
   body = body.replace(/\"size":\d+/g, '\"size":0');
}

if(tcad.test($request.url)){
   resp = {};
}

body = JSON.stringify(resp)
$done({body});
