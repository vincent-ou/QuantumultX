/*
倒班助手解锁脚本（立盾卡）
抓包实测（2026-11-12）：会员状态接口
  GET https://open.daobanzhushou.cn/shiftassistant/rs/user/lidunka
原返回（未开通）：{"code":"1","msg":"","data":{"status":0,"remainDays":0,"remainMonths":0}}
改写后：status → 1（已开通），remainDays → 9999，remainMonths → 999
注意：status=1 为“已开通”的推断值（0=未开通）；若 App 仍显示未开通，
请把 /user/lidunka 的返回发我再调。

[rewrite_local]
^https?:\/\/open\.daobanzhushou\.cn\/shiftassistant\/rs\/user\/lidunka.* url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/dbzs.js

[mitm]
hostname = open.daobanzhushou.cn
*/

var body = $response.body;
try {
  var obj = JSON.parse(body);
  if (obj && obj.data) {
    obj.data.status = 1;
    obj.data.remainDays = 9999;
    obj.data.remainMonths = 999;
  }
  $done({ body: JSON.stringify(obj) });
} catch (e) {
  $done({ body: body });
}
