// 调试版:在原有伪装逻辑之前,把疑似版本检查接口的请求和响应发一条通知,
// 方便看到真实返回里到底是哪个字段在控制弹窗。其他逻辑与 ksb-9.9.9.js 完全相同。
try {
  var _dbgUrl = $request.url || "";
  var _dbgBody = ($response && $response.body) || "";
  if (/version/i.test(_dbgBody) || /version/i.test(_dbgUrl)) {
    var _dbgHeaders = {};
    try { _dbgHeaders = $request.headers || {}; } catch (e) {}
    var _dbgReqBody = "";
    try { _dbgReqBody = $request.body || ""; } catch (e) {}
    var _dbgMsg = "URL: " + _dbgUrl + "\nREQ-H: " + JSON.stringify(_dbgHeaders) + "\nREQ-B: " + _dbgReqBody + "\nRESP: " + _dbgBody;
    console.log("[KSB-DEBUG] " + _dbgMsg);
    $notify("考试宝版本接口", _dbgUrl, _dbgMsg.substring(0, 3500));
  }
} catch (e) {}

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

// 强制更新绕过:把服务端返回的版本号改成跟本地装的版本一模一样的 4.6.6,
// 强制更新开关全部关闭。App 是拿服务端版本跟本地版本比对是否相等,不相等就弹
// 升级,所以 9.9.9 和 0.0.1 都会弹,只有改成跟本地一样的 4.6.6 才不弹。
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

// 版本号伪装:服务端返回的版本字段一律改成 4.6.6(跟本地装的版本一致),最低版本要求降到 0.0.1,
// 强制更新类开关一律关闭。只改值长得像版本号的字符串和布尔/数字开关,
// 其他字段不动;递归遍历整个响应体,所以不管版本信息藏在哪一层都能命中。
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
    "force_update", "is_force_update", "must_update", "forceUpdate",
    "isForceUpdate", "need_update", "is_need_update", "mandatory_update",
    "is_mandatory", "force_upgrade", "need_upgrade", "has_update",
    "has_new_version", "update_available", "is_update", "needUpdate",
    "hasUpdate"
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
      node[key] = "4.6.6";
    } else if (
      MIN_VERSION_KEYS.indexOf(key) !== -1 &&
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
