/*
倒班助手抓包+解锁二合一调试脚本（临时用）
用途：既打日志（看点“使用”时走了哪个接口），又做解锁改写（让 App 显示“使用”按钮）。
只在抓“使用”接口时用，抓完换回正式的 dbzs.js。
改写内容与 dbzs.js 相同：立盾卡 status→1，皮肤/头像框 userHave→1，
皮肤/头像框购买返回成功，豆币显示 99999。

[rewrite_local]
^https?:\/\/open\.daobanzhushou\.cn\/shiftassistant\/rs\/(user\/lidunka|user\/doubinum|skin\/|headerbox\/|availableDoubi\/show).* url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/dbzs-debug.js

[mitm]
hostname = open.daobanzhushou.cn
*/

var url = $request.url;
var method = $request.method || '';
var reqBody = $request.body || '';
var body = $response.body;
console.log('[dbzs-debug] ' + method + ' URL: ' + url);
if (reqBody) console.log('[dbzs-debug] REQ BODY: ' + reqBody);
console.log('[dbzs-debug] RESP BODY: ' + body);

try {
  var obj = JSON.parse(body);
  if (url.indexOf('/user/lidunka') !== -1) {
    if (obj && obj.data) {
      obj.data.status = 1;
      obj.data.remainDays = 9999;
      obj.data.remainMonths = 999;
    }
  } else if (url.indexOf('/skin/show') !== -1) {
    if (obj && obj.data && Array.isArray(obj.data.resultList)) {
      obj.data.resultList.forEach(function (s) { s.userHave = 1; });
    }
  } else if (url.indexOf('/skin/detail') !== -1) {
    if (obj && obj.data) {
      obj.data.userHave = 1;
      obj.data.doubi = 99999;
      obj.data.skinPiece = 999;
    }
  } else if (url.indexOf('/skin/buy') !== -1) {
    obj.code = '1';
    obj.msg = '';
    obj.data = '';
  } else if (url.indexOf('/headerbox/buy') !== -1) {
    obj.code = '1';
    obj.msg = '';
    obj.data = '';
  } else if (url.indexOf('/headerbox/show') !== -1) {
    if (obj && Array.isArray(obj.data)) {
      obj.data.forEach(function (h) { h.userHave = 1; });
    }
  } else if (url.indexOf('/user/doubinum') !== -1) {
    obj.data = 99999;
  } else if (url.indexOf('/availableDoubi/show') !== -1) {
    obj.data = 99999;
  }
  $done({ body: JSON.stringify(obj) });
} catch (e) {
  $done({ body: body });
}
