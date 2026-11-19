/* 一刻相册 解锁部分功能 — 解锁会员
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = pan.baidu.com */


const url = $request.url;
const forever = 4092599349;
let resp = {};
let isJson = true;
try {
  resp = JSON.parse($response.body || "{}");
} catch (e) {
  isJson = false;
}

const merge = (target, source) => Object.assign(target || {}, source);

const setStatus = obj => {
  if (obj && typeof obj === "object") {
    obj.status = 1;
  }
};

const vipInfo = {
  "emotional_tip_front" : "SVIP10至：2099-09-09",
  "expired_tip" : "SVIP10至：2099-09-09",
  "guide_tip" : [
    "已开通 · 尊享原画视频备份和在线解压特权"
  ],
  "status" : 1
};

function handleVipBase() {
  if (resp.level_info) {
    merge(resp.level_info, {
      "history_value" : 99999,
      "current_level" : 10,
      "last_manual_collection_time" : 0,
      "current_value" : 100000,
      "history_level" : 10,
      "v10_id" : "999999999"
    });
  }

  if (resp.vip) {
    merge(resp.vip, {
      ...vipInfo,
      "identity_icon_list" : [
        "https://internal-amis-res.cdn.bcebos.com/images/2019-8/1566452237582/78b88bf113b7.png"
      ]
    });
  }

  if (resp.svip) {
    merge(resp.svip, {
      ...vipInfo,
      "identity_icon_list" : [
        "https://internal-amis-res.cdn.bcebos.com/images/2019-8/1566452115696/38c1d743bfe9.png"
      ]
    });
  }
  setStatus(resp.netdisk_common_listening_notes_vip);
  setStatus(resp.vipv2);
  setStatus(resp.scan_vip);
}

function handleUserCard() {
  resp.data = resp.data || {};
  merge(resp.data, {
    "button" : {
      "text" : "去续费",
      "tab_link" : "https://pan.baidu.com/wap/vip/user?activeTab=svip&from=myvip3"
    },
    "role_text" : {
      "text_price" : "权益持续尊享中",
      "text_price_day" : "",
      "text_price_month" : ""
    },
    "jump_button" : {
      "link" : "https://pan.baidu.com/wap/vip/user?activeTab=svip&from=myvip3",
      "text" : "立即续费"
    },
    "title" : "SVIP10",
    "is_purchased_svip" : true,
    "benefit_list" : [{}],
    "privilege_list" : [
      {
        "icon" : "https://staticsns.cdn.bcebos.com/amis/2026-1/1768362604584/%E8%A7%A3%E5%8E%8B.png",
        "idol_icon" : "https://staticsns.cdn.bcebos.com/amis/2026-1/1768362776126/%E8%A7%A3%E5%8E%8B.png",
        "description" : "",
        "top_title" : "20G解压"
      },
      {
        "icon" : "https://staticsns.cdn.bcebos.com/amis/2026-1/1768362605168/%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0.png",
        "idol_icon" : "https://staticsns.cdn.bcebos.com/amis/2026-1/1768362777165/%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0.png",
        "description" : "",
        "top_title" : "2048G上传"
      },
      {
        "icon" : "https://staticsns.cdn.bcebos.com/amis/2026-1/1768362605691/%E8%BD%AC%E5%AD%98%E6%95%B0.png",
        "idol_icon" : "https://staticsns.cdn.bcebos.com/amis/2026-1/1768362777655/%E8%BD%AC%E5%AD%98%E6%95%B0.png",
        "description" : "",
        "top_title" : "30万转存"
      },
      {
        "icon" : "https://staticsns.cdn.bcebos.com/amis/2026-1/1768362604807/%E7%A9%BA%E9%97%B4.png",
        "idol_icon" : "https://staticsns.cdn.bcebos.com/amis/2026-1/1768362776581/%E7%A9%BA%E9%97%B4.png",
        "description" : "",
        "top_title" : "30T空间"
      }
    ]
  });
}

function handleVipCenter() {
  merge(resp, {
    "tips_data_list" : [
      {
        "title":"实名羡慕你的在线解压",
        "action_url":""
      },
      {
        "title":"新上线了PDF转Word >",
        "action_url":"bdnetdisk://n/action.swan?m_n_v=10.0&swan_app_key=8PPKdfjaGUz2lYS7d3zDvT6Gt2Ct9iVO"
      },
      {
        "title":"为你定制了V10专属福利 >",
        "action_url":"https://pan.baidu.com/wap/vip/memberChannel?newChannelBack=1#/userCenter"
      }
    ],

    "status_data" : "SVIP10至：2099-09-09",

    "guide_data" : {
      "action_url" : "",
      "title" : "超级会员SVIP",
      "title_action_url" : "",
      "content" : "已拥有极速下载+视频倍速等78项特权",
      "button" : {
        "text" : "等级升级",
        "action_url" : "https://pan.baidu.com/wap/vip/user?from=myvip3#svip"
      }
    },

    "user_status" : 2,
    "user_type" : "svip",
    "reminder" : {},
    "tips_data" : {
      "title":"实名羡慕你的在线解压",
      "action_url":""
    },

    "v10_guide" : {
      "get_next_value_gap":true,
      "tips":"升级还需要0成长值，可享更多权益",
      "button":{},
      "ab_test":false
    },

    "status_data_arr" : [
      "SVIP10至：2099-09-09"
    ]
  });
}

function handleProductInfo() {
  let userTag = JSON.parse(resp.user_tag || "{}");
  merge(userTag, {
    "is_vip" : 1,
    "is_svip" : 1,
    "is_vipv2" : 1,
    "is_vip_v2" : 1,
    "is_svip_sign" : 1,
    "is_vipv2_sign" : 1,
    "is_scan_vip_sign" : 1,
    "is_listen_sign" : 1,
    "has_buy_record" : 1,
    "has_vip_buy_record" : 1,
    "has_vipv2_buy_record" : 1,
    "has_svip_buy_record" : 1,
    "has_buy_vip_svip_record" : 1,
    "last_vip_type" : 1,
    "listen_note_auto_gifted" : 1,
    "last_vip_svip_end_time" : forever,
    "last_svip_end_time" : forever,
    "last_vip_end_time" : forever,
    "last_vipv2_end_time" : forever,
    "last_v10_end_time" : forever,
    "last_scan_vip_end_time" : forever,
    "last_listen_vip_end_time" : forever,
    "notice_user_type" : 2,
    "notice_user_status" : 3
  });
  resp.user_tag = JSON.stringify(userTag);

  const product = {"detail_cluster":"svip","expired_time":forever,"cluster":"vip","product_type":"vip2_1m_auto"};

  resp.current_product = resp.current_product || {};
  resp.current_product_v2 = resp.current_product_v2 || {};

  merge(resp.current_product, {
    "product_id" : "5977740735232710512",
    ...product
  });

  merge(resp.current_product_v2, {
    "product_id" : "5977740735232710512",
    ...product
  });
  resp.previous_product = product;
  resp.previous_product_v2 = product;
  resp.previous_product_cluster = product;
  resp.product_infos = resp.product_infos || [];
  resp.product_infos.push(
    {
      "cluster" : "offlinedl",
      "buy_description" : "离线下载套餐(永久)",
      "buy_time" : "1727154927",
      "end_time" : forever,
      "function_num" : 2,
      "product_description" : "离线下载套餐(永久)",
      "product_id" : "5210897752128663390",
      "start_time" : 1727154927,
      "status" : 0,
      "detail_cluster" : "offlinedl",
      "product_name" : "offlinedl_permanent"
    },
    {
      "cluster" : "netdisk_common_knowledge",
      "buy_description" : "知识库问答默认下发",
      "buy_time" : "1764312549",
      "end_time" : forever,
      "function_num" : 0,
      "product_description" : "知识库问答默认下发",
      "product_id" : "5675402079136193985",
      "start_time" : 1764312549,
      "status" : 0,
      "detail_cluster" : "netdisk_common_knowledge",
      "product_name" : "knowledge_default_answer"
    },
    {
      "cur_svip_type" : "month",
      "product_name" : "svip2_nd",
      "product_description" : "超级会员",
      "buy_description" : "",
      "function_num" : 0,
      "start_time" : 1777867851,
      "buy_time" : "1777867851",
      "auto_upgrade_to_svip" : 0,
      "product_id" : "5977740735232710512",
      "end_time" : forever,
      "cluster" : "vip",
      "detail_cluster" : "svip",
      "status" : 0
    }
  );
}

function handleUserInfo() {
  resp.user_info = resp.user_info || {};
  merge(resp.user_info, {
    "is_svip" : 1,
    "is_vip" : 1,
    "is_vip_v2" : 1,
    "is_vip_v2_new" : 1,
    "is_scan_vip" : 1
  });
}

const routes = [
  {
    "pattern" : /membership/,
    "handler" : handleVipBase
  },
  {
    "pattern" : /method=usercard/,
    "handler" : handleUserCard
  },
  {
    "pattern" : /user\?(freeisp|app_id|logid)/,
    "handler" : handleVipCenter
  },
  {
    "pattern" : /user\?(method=query|logid)/,
    "handler" : handleProductInfo
  },
  {
    "pattern" : /user\/info/,
    "handler" : handleUserInfo
  }
];

if (/membership\/user\?method=identify/.test(url)) {
  resp.identity = 3;
}

if (/user\/getinfo/.test(url)) {
  if (resp.records?.length) {
    resp.records.forEach(item => {
      item.vip_point = 30;
      item.vip_type = 10;
      item.vip_level = 10;
      item.svip10_id = "5977740735232710512";
    });
  }
}

if (/wap\/vip/.test(url) && !isJson) {
  let body = $response.body;
  body = body
    .replace(/"is_vip":\d+/g, '"is_vip":1')
    .replace(/"is_svip":\d+/g, '"is_svip":1')
    .replace(/"is_vip_v2":\d+/g, '"is_vip_v2":1')
    .replace(/"is_vip_v2_new":\d+/g, '"is_vip_v2_new":1')
    .replace(/"is_mvip":\d+/g, '"is_mvip":1')
    .replace(/"vipsid":\d+/g, '"vipsid":1')
    .replace(/"is_scan_vip":\d+/g, '"is_scan_vip":1')
    .replace(/"is_plus_buy":\d+/g, '"is_plus_buy":1')
    .replace(/"plus_buy_hit":\d+/g, '"plus_buy_hit":1')
    .replace(/"isAutoRenew":\d+/g, '"isAutoRenew":1')
    .replace(/"isVolumeAutoRenew":\d+/g, '"isVolumeAutoRenew":1')
    .replace(/"isScanVipAutoRenew":\d+/g, '"isScanVipAutoRenew":1')
    .replace(/"mvipAutoRenewStatus":\d+/g, '"mvipAutoRenewStatus":1')
    .replace(/"privilegecard_work":\d+/g, '"privilegecard_work":1')
    .replace(/"privilegecard_life":\d+/g, '"privilegecard_life":1')
    .replace(/"privilegecard_audio_visual":\d+/g, '"privilegecard_audio_visual":1')
    .replace(/"expVolumeVideoAd":\d+/g, '"expVolumeVideoAd":0');
}

if (/api\/loginstatus/.test(url)) {
  resp.login_info.vip_type = "2";
  resp.login_info.vip_identity = "10";
  resp.login_info.vip_level = 10;
  resp.login_info.vip_point = 30;
  resp.login_info.svip10_id = "5977740735232710512";
}

if (/skin\/inuse/.test($request.url)) {
  resp = {
    "errno" : 0,
    "show_msg" : "",
    "list" : [
      {
        "id" : 844,
        "name" : "SVIP 10专属皮肤",
        "type" : 1000,
        "is_used" : 1,
        "level" : 10,
        "my_img" : "https://staticsns.cdn.bcebos.com/amis/2022-11/1669035586014/SVIP10%E4%BC%9A%E5%91%98%E5%8D%A1%E8%83%8C%E6%99%AF%E7%9A%AE%E8%82%A4.png",
        "member_img" : "https://staticsns.cdn.bcebos.com/amis/2022-11/1669043967414/SVIP10%E4%BC%9A%E5%91%98%E5%8D%A1%E7%9A%AE%E8%82%A4%E8%AE%BE%E7%BD%AE%E9%A1%B5.png"
      }
    ]
  };

}

if (/api\/account\/getprivilege/.test(url)) {
  resp.data = {
    ...resp.data,
    "isplay" : 1,
    "overcount" : 0
  };
}

if (/proxy\/guide/.test(url)) {
  resp.data.need_show = false;
  resp.data.force_show = 0;
  resp.data.show_incentive_video = false;
  resp.data.ubc_dot.is_vip = 1;
  resp.data.ubc_dot.is_svip = 1;
  resp.data.ubc_dot.is_vipv2 = 1;
  resp.data.ubc_dot.vip_expired_days = forever;
  resp.data.ubc_dot.svip_expired_days = forever;
  resp.data.ubc_dot.has_svip_buy_record = 1;
  resp.data.ubc_dot.has_vip_buy_record = 1;
}

if (/coins\/taskcenter\/homensr/.test($request.url)) {
  if (resp.data) {
    resp.data.is_svip = 1;
    resp.data.is_valid_svip = 1;
    resp.data.is_svip_last = 1;
    resp.data.is_valid_svip_last = 1;
    resp.data.signed = 1;
    resp.data.signin_days = 9999;
    resp.data.points_balance = 999999;
    resp.data.sign_double_reward = 1;
    resp.data.wait_svip_reward = 1;
    resp.data.interval_days = 0;
    resp.data.countdown = 0;
    resp.data.coins_center_popup = 0;
    if (Array.isArray(resp.data.prize_line)) {
      resp.data.prize_line.forEach(item => {
        item.points = 30;
        if (item.svip) {
          item.svip.received = 1;
          item.svip.is_finally_award = 1;
          item.svip.name = "SVIP专属奖励";
        }
      });
    }
  }
}

//设置30TB空间容量(虚假)
if (/api\/quota/.test(url)) {
  resp.total = 32985348833280;
  resp.free = 32985348833280;
}

// 广告净化
if (/(activityentry|feed\/cardinfos|buy\/ad\/conf|bchannel|pcs\/adv)/.test(url)) {
  resp = {};
}

routes.forEach(route => {
  try {
    if (route.pattern.test(url)) {
      route.handler();
    }
  } catch (e) {
    console.log("百度网盘脚本异常:");
    console.log(String(e));
  }
});

if (!isJson) {
  $done({ body });
} else {
  $done({ body: JSON.stringify(resp) });
}
