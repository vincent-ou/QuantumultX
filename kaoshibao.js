/*
考试宝 — VIP + 额度

原作者：XiaoMao
适配版本：4.6.9
清理整理：Muse — 基于小帽脚本，逻辑与数值与原版一致。
           userInfo：VIP 到 2222-02-02，各类额度改为 1000/10000，去广告。
           版本伪装：force 置 0、high_version 降到 0.0.1、版本字段改成 4.6.9
             （4.6.9 上改返回值拦不住更新弹窗，实际靠 KaoShiBao.snippet 里
             拦掉 /system/checkUpdate 请求；伪装逻辑留作备用。）
           仅支持 4.6.9（最后一个能 MITM 的版本），4.7.0+ 已禁 MITM。

[rewrite_local]
https://api.ankianki.com url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/kaoshibao.js

[mitm]
hostname = api.ankianki.com
*/

let requestUrl = $request.url;
let status = isJSON($response.body);
var obj = status
  ? JSON.parse(
      removeExtraSpaces($response.body)
        .replace(/\"status\":\"\w+\"/g, '"status":"9"')
        .replace(/\"price\":\"\w+\"/g, '"price":"0"')
        .replace(/\"user_point\":\"\w+\"/g, '"user_point":"100000"')
        .replace(/\"sell_way\":\"\w+\"/g, '"sell_way":"0"')
        .replace(/\"ptype\":\"\w+\"/g, '"ptype":"0"')
        .replace(
          /\"auto_analysis_package\":\"\w+\"/g,
          '"auto_analysis_package":"100000"'
        )
        .replace(
          /\"kefu_import_paper_number\":\"\w+\"/g,
          '"kefu_import_paper_number":"100000"'
        )
    )
  : $response.body;

// 版本伪装（备用）：force 置 0，high_version 降到 0.0.1，版本字段改成 4.6.9；4.6.9 上实际靠 KaoShiBao.snippet 拦 checkUpdate 请求
if (status) spoofVersion(obj);

if (/^https:\/\/api\.ankianki\.com\/user\/userInfo\/get?/.test(requestUrl)) {
  obj.data.vip_expiration_time = "2222-02-02 08:00:00";
  obj.data.yst_vip_expiration_time = "2222-02-02 08:00:00";
  obj.data.expiration_time = "2222-02-02 08:00:00";
  obj.data.status = "1";
  obj.data.yst_vip_type = "2";
  obj.data.user_type = "2";
  obj.data.max_paper_limit = "1000";
  obj.data.auto_analysis_package = "1000";
  obj.data.extra_exam_number = "1000";
  obj.data.remove_error_limit = "1000";
  obj.data.export_system_paper_number = "1000";
  obj.data.kefu_import_paper_number = "1000";
  obj.data.system_error_recovery = "1000";
  obj.data.smart_create_question = "1000";
  obj.data.vip_config = {
    exam_questions_limit: "10000",
    paper_create_limit: "2000",
    exam_paper_limit: "10000",
    question_limit: "150000",
    paper_collect_limit: "3000",
    exam_member_limit: "5000",
    desc: "个人用户或小微企业刷题学习",
    exam_limit: "1000",
    price: "10000",
    paper_document_limit: "200",
    exam_submit_limit: "300",
    paid_kaoshi_limit: "000",
    alert_title: "高级用户",
    paper_limit: "4000",
  };
  obj.data.is_show_ad = "0";
  obj.data.vip_type = "2";
} else if (
  /^https:\/\/api\.ankianki\.com\/user\/paper\/list?/.test(requestUrl)
) {
  obj.data.export_system_paper_number = "10000";
  obj.data.show_paper_cover = "10000";
} else if (
  /^https:\/\/api\.ankianki\.com\/system\/setPassphrase?/.test(requestUrl)
) {
  obj.data.expire_at = "2222-02-02 08:00:00";
} else if (
  /^https:\/\/api\.ankianki\.com\/help\/commonSwitch\/getConfig?/.test(
    requestUrl
  )
) {
  obj.data = {
    ai_analysis: "1000",
    recommend_tips: "11000",
    ai_analysis_sse: "11000",
  };
} else if (
  /^https:\/\/api\.ankianki\.com\/user\/userSetting\/getFreeAnalysisNumber?/.test(
    requestUrl
  )
) {
  obj.data = {
    total: "10000",
    used: "10000",
  };
}
$done({ body: status ? JSON.stringify(obj) : obj });

// 递归改写响应体里的版本/强制更新字段,其他字段不动
function spoofVersion(node) {
  var VERSION_KEYS = [
    "version", "app_version", "appVersion", "latest_version", "latestVersion",
    "newest_version", "new_version", "newVersion", "current_version",
    "currentVersion", "ios_version", "iosVersion", "server_version",
    "online_version", "last_version", "latest_app_version"
  ];
  var MIN_VERSION_KEYS = [
    "min_version", "minimum_version", "lowest_version",
    "minVersion", "minimumVersion"
  ];
  var FORCE_KEYS = [
    "force", "force_update", "is_force_update", "must_update", "forceUpdate",
    "isForceUpdate", "need_update", "is_need_update", "mandatory_update",
    "is_mandatory", "force_upgrade", "need_upgrade", "has_update",
    "has_new_version", "update_available", "is_update", "needUpdate",
    "hasUpdate"
  ];
  var RANGE_KEYS = [
    "high_version", "highVersion"
  ];
  var UPDATE_TYPE_KEYS = ["update_type", "updateType"];

  if (!node || typeof node !== "object") return;
  for (var key in node) {
    if (!Object.prototype.hasOwnProperty.call(node, key)) continue;
    var val = node[key];
    if (
      VERSION_KEYS.indexOf(key) !== -1 &&
      typeof val === "string" &&
      /^\d+\.\d+(\.\d+){0,2}$/.test(val)
    ) {
      node[key] = "4.6.9";
    } else if (
      MIN_VERSION_KEYS.indexOf(key) !== -1 &&
      typeof val === "string" &&
      /^\d+\.\d+(\.\d+){0,2}$/.test(val)
    ) {
      node[key] = "0.0.1";
    } else if (
      RANGE_KEYS.indexOf(key) !== -1 &&
      typeof val === "string" &&
      /^\d+\.\d+(\.\d+){0,2}$/.test(val)
    ) {
      node[key] = "0.0.1";
    } else if (FORCE_KEYS.indexOf(key) !== -1) {
      if (typeof val === "boolean") node[key] = false;
      else if (typeof val === "number") node[key] = 0;
      else if (typeof val === "string") node[key] = "0";
    } else if (UPDATE_TYPE_KEYS.indexOf(key) !== -1) {
      if (typeof val === "number") node[key] = 0;
      else if (typeof val === "string") node[key] = "0";
    } else if (val && typeof val === "object") {
      spoofVersion(val);
    }
  }
}

function isJSON(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function removeExtraSpaces(jsonString) {
  var jsonObj = JSON.parse(jsonString);
  return JSON.stringify(jsonObj, function (key, value) {
    if (typeof value === "string") {
      return value.trim();
    }
    return value;
  });
}
