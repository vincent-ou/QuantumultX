/*
不挂科 (百度文库 App) — 解锁 VIP + 文档免费下载

清理整理：Muse — 仅做结构清理（body 声明、加空值保护），逻辑与数值与原版一致。
           VIP 到 2099-01-01；文档搜索去限制/去付费；下载文案清空。

[rewrite_local]
^https:\/\/appwk\.baidu\.com\/bgk\/(user\/getinfo|doc\/(getdocdownloadcopywriter|quedocsearch\?)) url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/buguake.js

[mitm]
hostname = appwk.baidu.com
*/

var url = $request.url;
var modified = JSON.parse($response.body);
var body = $response.body;

if (url.indexOf('/user/getinfo') !== -1) {
  // 用户信息：VIP 至 2099-01-01
  if (modified.data) {
    if (modified.data.saveMoney) {
      modified.data.saveMoney.sumMoney = "99999";
      modified.data.saveMoney.user_vip_tip = "有效期至：2099-01-01";
    }
    // 用用户自己的 uid，不再写作者的 QQ
    var realUid = (modified.data && (modified.data.uid || modified.data.userId || modified.data.user_id)) || 99999999;
    modified.data.vip = {
      "jiaoyu_vip_info": {
        "uid": realUid,
        "is_vip": 1,
        "start_time": 1672502400,
        "end_time": 4070880000,
        "pro_total": 99999999,
        "remain_day": 99999999
      }
    };
  }
  body = JSON.stringify(modified);
}

if (url.indexOf('/doc/quedocsearch') !== -1) {
  // 文档搜索：去限制、去付费
  body = $response.body.replace(/"isLimit":\d/g, '"isLimit":0').replace(/"isPay":\d/g, '"isPay":0');
}

if (url.indexOf('/doc/getdocdownloadcopywriter') !== -1) {
  // 下载文案：可下载、清空提示
  if (modified.data) {
    modified.data.downloadStatus = 21;
    modified.data.copywriter2 = "";
  }
  body = JSON.stringify(modified);
}

$done({ body: body });
