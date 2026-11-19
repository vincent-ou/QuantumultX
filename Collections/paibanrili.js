/* 排班日历 — 解锁会员 / 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = schedule-api.julanling.com */


var resp = JSON.parse($response.body);
var url = $request.url;
var expireTime = "2099-09-09 09:09:09";
var startTime = "2026-06-06 06:06:06";

var benefits = {
  "data_backup": {
    "expire_time": expireTime,
    "start_time": startTime,
    "business_type": "data_backup",
    "attribute": []
  },
  "more_shift": {
    "expire_time": expireTime,
    "start_time": startTime,
    "business_type": "more_shift",
    "attribute": [
      {
        "LIMIT": "100"
      }
    ]
  },
  "vip_identity": {
    "expire_time": expireTime,
    "start_time": startTime,
    "business_type": "vip_identity",
    "attribute": []
  },
  "android_widget_month": {
    "expire_time": expireTime,
    "start_time": startTime,
    "business_type": "android_widget_month",
    "attribute": []
  }
};

if (!resp.results || typeof resp.results !== "object") {
  resp.results = {};
}

if (url.includes("get_member_info")) {
  Object.assign(resp.results, {
    "grade": 3,
    "upgrade_grade_img": "",
    "benefits": benefits
  });

}

else if (url.includes("vip_detail")) {
  Object.assign(resp.results, {
    "card_number": "99999999",
    "grade": 3
  });
}

else if (url.includes("get_splash")) {
  resp.results = [];
}

$done({ body: JSON.stringify(resp)});
