/*
倒班助手 — 立盾卡 + 皮肤 + 头像框

清理整理：Muse — 抓包实测后自写，逻辑与数值以实测为准。
           会员：GET /shiftassistant/rs/user/lidunka
             status → 1，remainDays → 9999，remainMonths → 999
             已验证：App 显示立盾卡 9999 天 + 去广告。
           皮肤：show/detail 里 userHave → 1；detail 里 doubi → 99999，skinPiece → 999
             点“使用”走 POST /skin/toggle，改写为成功（code 1）；已验证能正常使用。
             /skin/buy 不改余额（服务器会校验，返回“豆币不足”），只改写返回成功。
           头像框：show 里全部 userHave → 1
             点“使用”走 POST /pocket/changeheaderbox，改写为成功（实测 2026-11-12）。
             /headerbox/toggle 是按皮肤同结构推测的，未实测到，保留作备用。
           豆币：/user/doubinum 与 /availableDoubi/show → 99999（仅显示用）。
           注意：换上 lucky 头像框后切不回默认框（服务器不认 lucky 为已拥有），已知问题，先不管。

[rewrite_local]
^https?:\/\/open\.daobanzhushou\.cn\/shiftassistant\/rs\/(user\/lidunka|user\/doubinum|user\/headerbox|skin\/|headerbox\/|pocket\/changeheaderbox|availableDoubi\/show).* url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/daobanzhushou.js

[mitm]
hostname = open.daobanzhushou.cn
*/


var url = $request.url;
var body = $response.body;
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
  } else if (url.indexOf('/skin/toggle') !== -1) {
    obj.code = '1';
    obj.msg = '';
    obj.data = '';
  } else if (url.indexOf('/headerbox/buy') !== -1) {
    obj.code = '1';
    obj.msg = '';
    obj.data = '';
  } else if (url.indexOf('/pocket/changeheaderbox') !== -1) {
    obj.code = '1';
    obj.msg = '';
    obj.data = '';
  } else if (url.indexOf('/headerbox/toggle') !== -1) {
    obj.code = '1';
    obj.msg = '';
    obj.data = '';
  } else if (url.indexOf('/user/headerbox') !== -1) {
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
