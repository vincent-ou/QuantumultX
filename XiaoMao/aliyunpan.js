/* 阿里云盘 — 阿里云盘 SVIP 解锁（可自定义到期日/容量/图标）
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.aliyundrive.com,member.aliyundrive.com,api.alipan.com,member.alipan.com,auth.alipan.com
 */
function getGoneDay(n = 0, yearFlag = true) {
  let myDate = new Date();
  myDate.setDate(myDate.getDate() - n);
  let month = myDate.getMonth() + 1;
  let day = myDate.getDate();
  let result =
    "" +
    (yearFlag ? myDate.getFullYear() : "") +
    "/" +
    (month < 10 ? "0" + month : month) +
    "/" +
    (day < 10 ? "0" + day : day);
  return result;
}
let obj = JSON.parse($response.body);
let $XiaoMaoSvip = new Env("ALiCloud");
let appName = `XiaoMao-ALiCloudvip`;
let XiaoMaoSvip = "";
let XiaoMaoEndTime = null;
let ALiCloudSpace = 0;
let ALiCloudIcon = 0;
let AliLink = 0;
let ALiCloudDistinct = 1;
let SvipDate = null;

let ALiCloudNo = 1;
let ALiCloudText1 = "第一体验官";
let ALiCloudText2 = "第一股东";
!(async () => {
  await XiaoMaoFunction();
})()
  .catch((err) => {
    $XiaoMaoSvip.log(err);
    setTimeout(() => {
      $XiaoMaoSvip.done();
    }, 3000);
  })
  .finally(() => {
    console.log(appName + "设置成功");
    setTimeout(() => {
      $XiaoMaoSvip.done();
    }, 5000);
  });

function XiaoMaoFunction() {
  if (
    $XiaoMaoSvip.read("ALiCloudVipYear") &&
    $XiaoMaoSvip.read("ALiCloudVipMonth") &&
    $XiaoMaoSvip.read("ALiCloudVipDay")
  ) {
    SvipDate = new Date(
      $XiaoMaoSvip.read("ALiCloudVipYear") +
        "/" +
        $XiaoMaoSvip.read("ALiCloudVipMonth") +
        "/" +
        $XiaoMaoSvip.read("ALiCloudVipDay")
    ).getTime();
    if (!SvipDate) {
      $XiaoMaoSvip.notify(
        appName,
        "",
        "会员日期设置错误，请输入正确的日期范围!"
      );
      XiaoMaoSvip = getGoneDay(-7);
    } else {
      XiaoMaoSvip =
        $XiaoMaoSvip.read("ALiCloudVipYear") +
        "/" +
        $XiaoMaoSvip.read("ALiCloudVipMonth") +
        "/" +
        $XiaoMaoSvip.read("ALiCloudVipDay");
    }
  } else {
    XiaoMaoSvip = getGoneDay(-7);
  }
  if ($XiaoMaoSvip.read("ALiCloudSpace")) {
    ALiCloudSpace = parseInt(
      parseInt($XiaoMaoSvip.read("ALiCloudSpace")) * 1024 * 1024 * 1024 * 1024
    );
  }
  if ($XiaoMaoSvip.read("ALiCloudIcon")) {
    ALiCloudIcon = parseInt($XiaoMaoSvip.read("ALiCloudIcon"));
  }
  if ($XiaoMaoSvip.read("ALiCloudDistinct")) {
    ALiCloudDistinct = parseInt($XiaoMaoSvip.read("ALiCloudDistinct"));
  }
  if ($XiaoMaoSvip.read("ALiCloudNo")) {
    ALiCloudNo =
      parseInt($XiaoMaoSvip.read("ALiCloudNo")) == 1
        ? 1
        : parseInt($XiaoMaoSvip.read("ALiCloudNo"));
  }
  if ($XiaoMaoSvip.read("ALiCloudText1")) {
    ALiCloudText1 =
      $XiaoMaoSvip.read("ALiCloudText1") == "第一体验官"
        ? "第一体验官"
        : $XiaoMaoSvip.read("ALiCloudText1");
  }
  if ($XiaoMaoSvip.read("ALiCloudText2")) {
    ALiCloudText2 =
      $XiaoMaoSvip.read("ALiCloudText2") == "第一股东"
        ? "第一股东"
        : $XiaoMaoSvip.read("ALiCloudText2");
  }
  if ($XiaoMaoSvip.read("ALiCloudLink")) {
    AliLink = parseInt($XiaoMaoSvip.read("ALiCloudLink")) ? 1 : 0;
  }
  XiaoMaoEndTime = new Date(XiaoMaoSvip).getTime() / 1000;
}
if ($response.body) {
  let requestUrl = $request.url;
  if (
    /^https:\/\/api\.(aliyundrive|alipan)\.com\/apps\/v1\/users\/apps\/welcome?/.test(
      requestUrl
    )
  ) {
    obj.hasOwnProperty("description") ? (obj.description = "XiaoMao") : "";
  } else if (
    /^https:\/\/api\.(aliyundrive|alipan)\.com\/v2\/databox\/get_personal_info?/.test(
      requestUrl
    )
  ) {
    let privileges = [
      { feature_id: "download", feature_attr_id: "speed_limit", quota: -1 },
      {
        feature_id: "drive",
        feature_attr_id: "size_limit",
        quota: 107374182400,
      },
      {
        feature_id: "safe_box",
        feature_attr_id: "size_limit",
        quota: 53687091200,
      },
      {
        feature_id: "upload",
        feature_attr_id: "size_limit",
        quota: 2199023255552,
      },
      { feature_id: "video", feature_attr_id: "backup", quota: 1 },
      { feature_id: "video", feature_attr_id: "clarity_limit", quota: 3 },
    ];
    obj.hasOwnProperty("personal_rights_info")
      ? ((obj.personal_rights_info.is_expires = false),
        (obj.personal_rights_info.privileges = privileges),
        (obj.personal_rights_info.spu_id = "svip"),
        (obj.personal_rights_info.name = "超级会员"))
      : "";
  } else if (
    /^https:\/\/api\.alipan\.com\/adrive\/v1\/user\/getUserCapacityInfo?/.test(
      requestUrl
    )
  ) {
    obj.drive_capacity_details.hasOwnProperty("drive_total_size") &&
    ALiCloudSpace != 0
      ? (obj.drive_capacity_details.drive_total_size = ALiCloudSpace)
      : "";
  } else if (
    /^https:\/\/api\.(aliyundrive|alipan)\.com\/business\/v1.0\/users\/vip\/info?/.test(
      requestUrl
    )
  ) {
    let vipList = [
      {
        code: "svip",
        promotedAt: 1660233280,
        expire: XiaoMaoEndTime,
        name: "20TB超级会员",
      },
      {
        code: "svip.8t",
        promotedAt: 1680970202,
        expire: XiaoMaoEndTime,
        name: "超级会员",
      },
    ];
    obj.hasOwnProperty("icon")
      ? (obj.icon =
          "https://gw.alicdn.com/imgextra/i3/O1CN01iPKCuZ1urjDgiry5c_!!6000000006091-2-tps-60-60.png")
      : "";
    obj.hasOwnProperty("mediumIcon")
      ? (obj.mediumIcon =
          "https://gw.alicdn.com/imgextra/i4/O1CN01Mk916Y1c99aVBrgxM_!!6000000003557-2-tps-222-60.png")
      : "";
    obj.hasOwnProperty("status") ? (obj.status = "normal") : "";
    obj.hasOwnProperty("identity") ? (obj.identity = "svip") : "";
    obj.hasOwnProperty("level") ? (obj.level = "8t") : "";
    obj.hasOwnProperty("vipList") ? (obj.vipList = vipList) : "";
  } else if (
    /^https:\/\/member\.(aliyundrive|alipan)\.com\/v1\/users\/tools?/.test(
      requestUrl
    )
  ) {
    let moreToolsList = [];
    obj.hasOwnProperty("result")
      ? (delete obj.result.guideInfo,
        obj.result.commonTools.forEach((el) => {
          el.profitDesc = null;
          el.version = null;
        }),
        obj.result.moreTools.forEach((el) => {
          if (
            el.name != "好运瓶" &&
            el.name != "达人中心" &&
            el.name != "帮助与反馈" &&
            el.name != "特惠流量包" &&
            el.name != "开放应用"
          ) {
            el.profitDesc = null;
            el.version = null;
            moreToolsList.push(el);
          }
        }),
        (obj.result.moreTools = moreToolsList),
        ALiCloudIcon == 1
          ? ((obj.result.moreTools = moreToolsList.concat(
              obj.result.commonTools
            )),
            (obj.result.commonTools = []))
          : "")
      : "";
  } else if (
    /^https:\/\/api\.(aliyundrive|alipan)\.com\/business\/v1\/users\/me\/vip\/info?/.test(
      requestUrl
    )
  ) {
    let vipInfoObj = {
      rightButtonText: "SVIP",
      identity: "svip",
      level: "8t",
      titleNotice: "第一股东",
      titleImage:
        "https://gw.alicdn.com/imgextra/i1/O1CN01Z2Yv4u1jrJ5S5TYpo_!!6000000004601-2-tps-216-60.png",
      description: "终身会员-铭牌：No.01",
    };
    obj = vipInfoObj;
  } else if (
    /^https:\/\/api\.(aliyundrive|alipan)\.com\/business\/v1.1\/users\/me\/vip\/info?/.test(
      requestUrl
    )
  ) {
    obj.description = "";
    obj.titleNotice = "";
    obj.activityAction = "";
    obj.rightButtonText = ALiCloudText2;
    obj.activityText = "";
    obj.identity = "svip";
    obj.backgroundImage =
      "https://gw.alicdn.com/imgextra/i4/O1CN01cwAW0u1GPG2oa6WW7_!!6000000000614-2-tps-654-212.png";
    obj.titleImage =
      "https://gw.alicdn.com/imgextra/i2/O1CN01snE6rA1pVg95HyRBl_!!6000000005366-2-tps-214-49.png";
  } else if (
    /^https:\/\/api\.(aliyundrive|alipan)\.com\/adrive\/v2\/user\/get?/.test(
      requestUrl
    )
  ) {
    obj.hasOwnProperty("vip_identity") ? (obj.vip_identity = "svip") : "";
    obj.hasOwnProperty("role") ? (obj.role = "administrator") : "";
    obj.hasOwnProperty("expired_at") ? (obj.expired_at = XiaoMaoEndTime) : "";
  } else if (
    /^https:\/\/api\.(aliyundrive|alipan)\.com\/business\/v1.0\/users\/feature\/list?/.test(
      requestUrl
    )
  ) {
    obj.hasOwnProperty("identity") ? (obj.identity = "svip") : "";
    if (obj.features.length) {
      obj.features.forEach((el) => {
        el.trialStatus = "allowTrial";
        el.intercept = false;
        el.name = "SVIP";
        if (el.hasOwnProperty("features") && el.features.length) {
          el.features.forEach((kid) => {
            kid.trialStatus = "allowTrial";
            kid.intercept = false;
            kid.name = "SVIP";
          });
        }
      });
    }
  } else if (
    /^https:\/\/api\.(aliyundrive|alipan)\.com\/business\/v1.0\/users\/feature\/trial?/.test(
      requestUrl
    )
  ) {
    obj.trialStartTime = new Date(getGoneDay(-100)).getTime() / 1000;
    obj.trialDuration = 20000000;
    obj.trialStatus = "onTrial";
  } else if (
    /^https:\/\/api\.(aliyundrive|alipan)\.com\/apps\/v1\/users\/home\/widgets?/.test(
      requestUrl
    )
  ) {
    obj.hasOwnProperty("coreFeatures") ? (obj.coreFeatures.items = []) : "";
    obj.hasOwnProperty("activities") ? delete obj.activities : "";
    obj.hasOwnProperty("recentSaved")
      ? (obj.recentSaved = { items: obj.recentSaved.items })
      : "";
    obj.hasOwnProperty("signIn") ? (obj.signIn.description = "大佬您好") : "";
  } else if (
    /^https:\/\/api\.(aliyundrive|alipan)\.com\/adrive\/v1\/app\/logos?/.test(
      requestUrl
    )
  ) {
    if (obj.items && obj.items.length) {
      obj.items.forEach((el) => {
        el.labelText = "已获得";
        el.labelCode = "acquired";
      });
    }
  } else if (
    /^https:\/\/api\.(aliyundrive|alipan)\.com\/v2\/file\/get_video_preview_play_info?/.test(
      requestUrl
    )
  ) {
    if (obj.video_preview_play_info.live_transcoding_task_list.length) {
      let videoUrl =
        obj.video_preview_play_info.live_transcoding_task_list[0].url;
      if (ALiCloudDistinct) {
        obj.video_preview_play_info.live_transcoding_task_list.forEach(
          (el, i) => {
            if (i > 0) {
              el.url = videoUrl;
              el.status = "finished";
              el.stage = "stage_all";
            }
          }
        );
      } else {
        console.log(
          "视频在线播放清晰度解锁已关闭，需开启请前往XiaoMaoBoxJs手动开启！请查看脚本注释"
        );
      }
      let resultText =
        "已捕捉到当前视频源m3u8地址，请注意源链接仅为临时链接具有时效性且无法在线播放，仅可用于m3u8相关软件进行多线程下载。" +
        "\n\n" +
        "m3u8源地址：" +
        "\n" +
        videoUrl;
      AliLink
        ? ($XiaoMaoSvip.notify(
            "🚨XiaoMao_阿里云盘",
            "m3u8地址获取成功❗️",
            resultText
          ),
          $XiaoMaoSvip.log(resultText))
        : console.log(
            "视频m3u8地址获取已关闭，需开启请前往XiaoMaoBoxJs手动开启！请查看脚本注释"
          );
    }
  } else if (
    /^https:\/\/api\.(aliyundrive|alipan)\.com\/adrive\/v2\/batch?/.test(
      requestUrl
    )
  ) {
    delete obj.distributorCouponInfo;
  } else if (
    /^https:\/\/member\.alipan\.com\/v2\/activity\/sign_in_info?/.test(
      requestUrl
    )
  ) {
    obj.result.blessing = "大佬您好！";
    let list = [];
    if (obj.result.rewards.length) {
      obj.result.rewards.forEach((el) => {
        if (el.type != "vipDay" && el.type != "dailyBuyVip") {
          list.push(el);
        }
      });
      obj.result.rewards = list;
    }
  } else if (
    /^https:\/\/member\.aliyundrive\.com\/v2\/activity\/sign_in_list?/.test(
      requestUrl
    )
  ) {
    if (obj.result.signInInfos.length) {
      obj.result.signInInfos.forEach((el) => {
        if (el.rewards.length) {
          let list = [];
          el.rewards.forEach((i) => {
            if (i.type != "vipDay" && i.type != "dailyBuyVip") {
              list.push(i);
            }
          });
          el.rewards = list;
        }
      });
    }
  } else if (
    /^https:\/\/member\.alipan\.com\/v1\/users\/me?/.test(requestUrl)
  ) {
    obj.no = ALiCloudNo;
    obj.subTitle = ALiCloudText1;
    obj.membershipIdentity = "svip";
    obj.badges = [
      {
        code: "member-ship",
        defaultIcon:
          "https://gw.alicdn.com/imgextra/i3/O1CN01iPKCuZ1urjDgiry5c_!!6000000006091-2-tps-60-60.png",
        iconText: null,
        iconTemplate: null,
      },
      {
        code: "beta-user",
        defaultIcon:
          "https://gw.alicdn.com/imgextra/i1/O1CN01cwg2Bj1JTKPDiiSHb_!!6000000001029-2-tps-40-40.png",
        iconText: null,
        iconTemplate: null,
      },
    ];
    obj.followingCount = parseInt(Math.random() * 9999999);
    obj.membershipIcon =
      "https://gw.alicdn.com/imgextra/i3/O1CN01iPKCuZ1urjDgiry5c_!!6000000006091-2-tps-60-60.png";
  } else if (
    /^https:\/\/api\.alipan\.com\/adrive\/v1\/timeline\/user\/get?/.test(
      requestUrl
    )
  ) {
    obj.follower_count = parseInt(Math.random() * 9999999);
  } else if (
    /^https:\/\/api\.alipan\.com\/apps\/v1\/users\/home\/recent?/.test(
      requestUrl
    )
  ) {
    if (obj.items && obj.items.length) {
      let itemsTem = [];
      obj.items.forEach((el) => {
        if (
          !itemsTem.filter((i) => i.fileFolderDisplay == el.fileFolderDisplay)
            .length
        ) {
          itemsTem.push(el);
        }
      });
      obj.items = itemsTem;
    }
  }
  $done({ body: JSON.stringify(obj) });
} else {
  $done({});
}

function Env(name) {
  const read = (key) => $prefs.valueForKey(key);
  const write = (key, value) => $prefs.setValueForKey(key, value);
  const notify = (title = "", subtitle = "", message = "", url = "") => {
    if (url) $notify(title, subtitle, message, { "open-url": url });
    else $notify(title, subtitle, message);
  };
  const get = (option, callback) => {
    if (typeof option === "string") option = { url: option };
    option.method = "GET";
    $task.fetch(option).then((resp) => callback(null, { status: resp.statusCode, statusCode: resp.statusCode, headers: resp.headers, body: resp.body }, resp.body)).catch((e) => callback(e, {}, null));
  };
  const post = (option, callback) => {
    if (typeof option === "string") option = { url: option };
    option.method = "POST";
    $task.fetch(option).then((resp) => callback(null, { status: resp.statusCode, statusCode: resp.statusCode, headers: resp.headers, body: resp.body }, resp.body)).catch((e) => callback(e, {}, null));
  };
  const put = (option, callback) => {
    if (typeof option === "string") option = { url: option };
    option.method = "PUT";
    $task.fetch(option).then((resp) => callback(null, { status: resp.statusCode, statusCode: resp.statusCode, headers: resp.headers, body: resp.body }, resp.body)).catch((e) => callback(e, {}, null));
  };
  const msg = (title = "", subtitle = "", message = "", url = "") => {
    if (url) $notify(title, subtitle, message, { "open-url": url });
    else $notify(title, subtitle, message);
  };
  const isQuanX = () => true;
  const isSurge = () => false;
  const isLoon = () => false;
  const isNode = () => false;
  const toObj = (str) => JSON.parse(str);
  const toStr = (obj) => JSON.stringify(obj);
  const queryStr = (obj) => Object.keys(obj).map((key) => `${key}=${obj[key]}`).join("&");
  const log = (message) => console.log(message);
  const done = (value = {}) => $done(value);
  return { name, read, write, notify, msg, get, post, put, toObj, toStr, queryStr, log, done, isQuanX, isSurge, isLoon, isNode };
}
