/*
倒班助手解锁脚本（立盾卡 + 皮肤 + 头像框）
抓包实测（2026-11-12）：
  会员：GET /shiftassistant/rs/user/lidunka
    原返回（未开通）：{"code":"1","msg":"","data":{"status":0,"remainDays":0,"remainMonths":0}}
    改写：status → 1（已开通），remainDays → 9999，remainMonths → 999
    已验证：App 显示立盾卡 9999 天 + 去广告。
  皮肤：GET /shiftassistant/rs/skin/show（8 个，7 个 400 豆币，userHave 0）
        GET /shiftassistant/rs/skin/detail（doubi 10，皮肤碎片 0，400 豆币或 36 碎片）
        /skin/buy 实测服务器会校验余额（返回“豆币不足”/“皮肤碎片不足”），
        所以不改余额去买，而是直接把列表里的 userHave 改成 1，让 App 显示为已拥有。
        点“使用”走 POST /skin/toggle，服务器校验拥有权（返回“用户无此皮肤使用权限”），
        改写为成功（code 1）。头像框同理：/headerbox/toggle 改写为成功。
    改写：show/detail 里 userHave → 1；detail 里 doubi → 99999，skinPiece → 999；
          buy/toggle 返回成功（code 1），供点购买/使用时走通客户端流程。
  头像框：GET /shiftassistant/rs/headerbox/show（20 个：4 个 200 豆币 + 活动专属 + 撑腰奖励）
    改写：全部 userHave → 1。
    点“使用”走 POST /pocket/changeheaderbox（实测 2026-11-12 20:31），服务器校验拥有权，
    未拥有返回 {"code":"0","msg":"头像框不存在或当前没有获得该头像框"}——改写为成功。
    /headerbox/toggle 是按皮肤同结构推测的，未实测到，保留作备用。
    /user/headerbox 是启动时调的当前头像框接口（返回空），也改写为成功。
  豆币：/user/doubinum（10）与 /availableDoubi/show（13）→ 99999（仅显示用）。
注意：皮肤/头像框的“使用”是否需服务器再校验未知；若点“使用”后仍提示未拥有，
请把那次的接口返回发我再调。

[rewrite_local]
^https?:\/\/open\.daobanzhushou\.cn\/shiftassistant\/rs\/(user\/lidunka|user\/doubinum|skin\/|headerbox\/show|availableDoubi\/show).* url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/dbzs.js

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
