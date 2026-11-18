/*
 # > 软件名称: 酷我音乐
 # > 脚本描述: 去除全局广告、解锁会员权限【最高无损】
 # > 脚本版本: 4.0.1
 # > 更新时间: 2026-05-29 12:00:00

hostname = *.kuwo.cn

^https?:\/\/mobilead\.kuwo\.cn\/EcomResourceServer\/get(IOSIsHideAd|Motor)\.do url reject-200
^https?:\/\/rich\.kuwo\.cn\/(AdService|ecom)\/kaiping\/ad[iI]nfo url reject-200
^https?:\/\/wapi\.kuwo\.cn\/openapi\/v1\/user\/((adVip|pop|freeMode\/h5)\/)?(info|text|homePage) url reject-200
^https?:\/\/appi\.kuwo\.cn\/kuwopay\vip-tab\/setting url reject-200
^https?:\/\/(?:vip1\.kuwo\.cn\/(?:vip\/enc\/user\/vip|vip\/v2\/user\/vip|(?:commercia\/)?vip\/(?:v2\/theme\?op=gd|player\/getStyleListByModel|hanger\/wear)|commercia\/vip\/dressCenter\/getTabList|commercia\/vipTab\/myTab\/base)|.+\.kuwo\.cn\/mobi\.s\?f=(?:kuwo|kwxs)\&q=|music(?:pay)?\.kuwo\.cn\/music\.pay\?newver=3|tingshu\.kuwo\.cn\/(?:api\/v2\/pay\/app\/getConfigInfo|v2\/api\/pay\/payInfo\/kwplayer\/payMiniBar)|audiobookpay\.kuwo\.cn\/a\.p|homepages\.kuwo\.cn(?:\.eo\.dnse1\.com)?\/mgxh\.s) url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/Kuwo/kuwo.js

*/
class $ {
  static #getErrorMessage(error) {
    if (error instanceof Error) {
      return error.message;
    } else {
      return String(error);
    }
  }
  static #detectEnvironment() {
    const globalKeys = Object.keys(globalThis);
    if (globalKeys.includes("$task")) {
      return "Quantumult X";
    }
    if (globalKeys.includes("$loon")) {
      return "Loon";
    }
    if (globalKeys.includes("$rocket")) {
      return "Shadowrocket";
    }
    if (typeof $environment != "undefined" && $environment !== null) {
      if ($environment["surge-version"]) {
        return "Surge";
      }
      if ($environment["stash-version"]) {
        return "Stash";
      }
    }
    return "Unknown";
  }
  static isQX() {
    return this.#detectEnvironment() === "Quantumult X";
  }
  static isLoon() {
    return this.#detectEnvironment() === "Loon";
  }
  static read(key) {
    try {
      if (this.isQX()) {
        return $prefs.valueForKey(key);
      } else {
        return $persistentStore.read(key);
      }
    } catch (err) {
      return null;
    }
  }
  static write(key, value) {
    try {
      const stringValue = typeof value == "string" ? value : Json.stringify(value);
      if (this.isQX()) {
        return $prefs.setValueForKey(stringValue, key);
      } else {
        return $persistentStore.write(stringValue, key);
      }
    } catch (err) {
      return false;
    }
  }
  static #parseNotificationOptions(options = {}) {
    const opts = typeof options == "string" ? {
      url: options
    } : options ?? {};
    const action = opts.action;
    const actionObj = typeof action == "object" && action !== null ? action : {};
    const actionType = actionObj.type ?? actionObj.name ?? "";
    const actionValue = actionObj.value ?? actionObj.url ?? actionObj.openUrl ?? actionObj["open-url"] ?? "";
    let openUrl = opts.url ?? opts.openUrl ?? opts["open-url"] ?? actionObj.url ?? actionObj.openUrl ?? actionObj["open-url"] ?? "";
    let mediaUrl = opts.mediaUrl ?? opts["media-url"] ?? actionObj.mediaUrl ?? actionObj["media-url"] ?? "";
    if (typeof action == "string" && /^(?:[a-z][a-z\d+.-]*:)?\/\//i.test(action)) {
      openUrl = action;
    }
    if (/^open-?url$/i.test(actionType) && actionValue) {
      openUrl = actionValue;
    }
    if (/^media-?url$/i.test(actionType) && actionValue) {
      mediaUrl = actionValue;
    }
    if (mediaUrl && !/^https?:\/\//i.test(mediaUrl)) {
      mediaUrl = "";
    }
    return {
      openUrl: openUrl,
      mediaUrl: mediaUrl
    };
  }
  static notify(title, subtitle, message, options = {}) {
    const {
      openUrl,
      mediaUrl
    } = this.#parseNotificationOptions(options);
    try {
      if (this.isQX()) {
        const qxOpts = {};
        if (openUrl) {
          qxOpts["open-url"] = openUrl;
        }
        if (mediaUrl) {
          qxOpts["media-url"] = mediaUrl;
        }
        $notify(title, subtitle, message, qxOpts);
      } else if (this.isLoon()) {
        const loonOpts = {};
        if (openUrl) {
          loonOpts.openUrl = openUrl;
        }
        if (mediaUrl) {
          loonOpts.mediaUrl = mediaUrl;
        }
        $notification.post(title, subtitle, message, loonOpts);
      } else {
        const surgeOpts = {};
        if (openUrl) {
          surgeOpts.url = openUrl;
        }
        if (mediaUrl) {
          surgeOpts["media-url"] = mediaUrl;
        }
        $notification.post(title, subtitle, message, surgeOpts);
      }
    } catch (err) {
      console.log(`[notify] ${this.#getErrorMessage(err)}`);
    }
  }
  static request(requestOptions, timeout = 5000) {
    let timeoutId = null;
    const requestPromise = new Promise((resolve, reject) => {
      if (this.isQX()) {
        $task.fetch(requestOptions).then(response => {
          const statusCode = response.statusCode;
          resolve({
            ...response,
            status: statusCode,
            ok: /^2\d\d$/.test(statusCode)
          });
        }, error => reject(error.error ?? error));
      } else {
        const method = (requestOptions.method ?? "GET").toLowerCase();
        $httpClient[method](requestOptions, (error, response, body) => {
          if (error) {
            return reject(error);
          }
          const statusCode = response.status;
          resolve({
            ...response,
            body: body,
            status: statusCode,
            ok: /^2\d\d$/.test(statusCode)
          });
        });
      }
    });
    const timeoutPromise = new Promise((resolve, reject) => {
      timeoutId = setTimeout(() => reject(new Error(`Request timeout after ${timeout}ms`)), timeout);
    });
    return Promise.race([requestPromise, timeoutPromise]).then(result => {
      clearTimeout(timeoutId);
      return result;
    }, error => {
      clearTimeout(timeoutId);
      throw error;
    });
  }
  static done(response) {
    let resp = response ?? {};
    if (this.isQX() && typeof resp.status == "number") {
      resp.status = `HTTP/1.1 ${resp.status} OK`;
    }
    $done(resp);
  }
}
class Json {
  static parse(str) {
    try {
      return JSON.parse(str);
    } catch (err) {
      return str;
    }
  }
  static stringify(obj) {
    if (typeof obj == "string") {
      return obj;
    }
    try {
      return JSON.stringify(obj);
    } catch (err) {
      return "";
    }
  }
  static clone(obj) {
    return Json.parse(Json.stringify(obj));
  }
}
class Headers {
  static stripHop(headers) {
    if (!headers) {
      return {};
    }
    const clonedHeaders = Json.clone(headers);
    ["content-encoding", "Content-Encoding", "transfer-encoding", "Transfer-Encoding", "content-length", "Content-Length"].forEach(key => delete clonedHeaders[key]);
    return clonedHeaders;
  }
}
class Base64 {
  static alphabet() {
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  }
  static decode(str) {
    if (typeof atob == "function") {
      return atob(str);
    }
    const cleanStr = str.replace(/\s+/g, "");
    const chars = Base64.alphabet();
    let result = "";
    let buffer = 0;
    let bits = 0;
    for (const char of cleanStr) {
      if (char === "=") {
        break;
      }
      const index = chars.indexOf(char);
      if (index < 0) {
        throw new Error("Invalid Base64 character");
      }
      buffer = buffer << 6 | index;
      bits += 6;
      if (bits >= 8) {
        bits -= 8;
        result += String.fromCharCode(buffer >> bits & 255);
      }
    }
    return result;
  }
  static encode(str) {
    if (typeof btoa == "function") {
      return btoa(str);
    }
    const chars = Base64.alphabet();
    let result = "";
    let i = 0;
    while (i < str.length) {
      const byte1 = str.charCodeAt(i++) & 255;
      const hasByte2 = i < str.length;
      const byte2 = hasByte2 ? str.charCodeAt(i++) & 255 : 0;
      const hasByte3 = i < str.length;
      const triple = byte1 << 16 | byte2 << 8 | (hasByte3 ? str.charCodeAt(i++) & 255 : 0);
      result += chars[triple >> 18 & 63];
      result += chars[triple >> 12 & 63];
      result += hasByte2 ? chars[triple >> 6 & 63] : "=";
      result += hasByte3 ? chars[triple & 63] : "=";
    }
    return result;
  }
}
class Utils {
  static isObject(obj) {
    return typeof obj == "object" && obj !== null;
  }
  static isNonEmptyArray(arr) {
    return Array.isArray(arr) && arr.length > 0;
  }
  static byteLength(str) {
    const text = typeof str == "string" ? str : String(str ?? "");
    if (typeof TextEncoder == "function") {
      return new TextEncoder().encode(text).length;
    } else {
      return unescape(encodeURIComponent(text)).length;
    }
  }
  static getErrorMessage(error) {
    if (error instanceof Error) {
      return error.message;
    } else {
      return String(error);
    }
  }
  static isResponsePayload(obj) {
    return Utils.isObject(obj) && typeof obj.body == "string";
  }
}
const requestUrl = $request?.url ?? "";
const requestMethod = $request?.method?.toUpperCase() ?? "";
const requestHost = ($request?.headers?.Host ?? $request?.headers?.host ?? "").split(":")[0].toLowerCase();
const responseBody = $response?.body ?? null;
const parsedBody = Json.parse(responseBody);
const Handler = {
  mobiConfig() {
    if (typeof responseBody != "string" || responseBody.length === 0) {
      return null;
    }
    try {
      const trimmed = responseBody.trim();
      if (!/^[A-Za-z0-9+/]+={0,2}$/.test(trimmed) || trimmed.length % 4 != 0) {
        return null;
      }
      const decoded = Base64.decode(trimmed);
      const firstLine = decoded.replace(/^﻿/, "").split(/\r?\n/, 1)[0]?.trim();
      if (firstLine !== "[appconfig]") {
        return null;
      }
      let modified = decoded;
      const configPairs = {
        MFQryAuthReq_SimpleToken: false,
        BOOKPAY_SIMPLE: false
      };
      for (const [key, value] of Object.entries(configPairs)) {
        const regex = new RegExp(`^(${key}\\s*=\\s*)[^\\r\\n]*`, "m");
        modified = regex.test(modified) ? modified.replace(regex, `$1${value}`) : modified.replace(/^(\[[^\r\n]+\]\r?\n?)/, `$1${key}=${value}\n`);
      }
      if (modified === decoded) {
        return null;
      }
      return Base64.encode(modified);
    } catch (err) {
      return null;
    }
  },
  vipPage: () => parsedBody?.data ? (Object.assign(parsedBody.data, {
    vipAdExpire: "0",
    luxAutoPayUser: "1",
    vipExpire: "4077187200000",
    vipmExpire: "4077187200000",
    vipOverSeasExpire: "0",
    biedAlbum: "0",
    vipLuxuryExpire: "4077187200000",
    svipExpire: "4077187200000",
    biedSong: "0",
    isYearUser: "0",
    svipAutoPayUser: "0",
    vipAdAutoPayUser: "0",
    vip3Expire: "0",
    vipmAutoPayUser: "0",
    experienceExpire: "0",
    vipWatch1Expire: "4077187200000",
    isNewUser: "1"
  }), parsedBody) : null,
  musicInfo() {
    if (!Utils.isNonEmptyArray(parsedBody?.songs)) {
      return null;
    }
    const song = parsedBody.songs[0];
    if (!song || !Utils.isNonEmptyArray(song.audio)) {
      return null;
    }
    const firstAudio = song.audio[0];
    if (firstAudio) {
      if (!Array.isArray(parsedBody.user)) {
        parsedBody.user = [];
      }
      song.audio.forEach(audioItem => {
        if (Utils.isObject(audioItem)) {
          audioItem.st = 0;
        }
      });
      song.mp3Download = {
        couponNum: 999,
        isSVip: 1,
        isShow: 1
      };
      parsedBody.user[0] = {
        pid: firstAudio.pid,
        type: firstAudio.policy,
        name: `${firstAudio.policy}_1`,
        categray: `${firstAudio.policy}_1`,
        id: song.id,
        order: 375787919,
        final: [],
        buy: 1657425321,
        begin: 1657425321,
        end: 4077187200,
        CurEnd: 0,
        playCnt: 0,
        playUpper: 300,
        downCnt: 0,
        downUpper: 300,
        playVideoCnt: 0,
        playVideoUpper: 3000,
        downVideoCnt: 0,
        downVideoUpper: 3000,
        price: firstAudio.price,
        period: 1000,
        feetype: 0,
        info: song
      };
      return parsedBody;
    } else {
      return null;
    }
  },
  replaceVipFields(obj) {
    if (Utils.isObject(obj)) {
      for (const key of Object.keys(obj)) {
        const value = obj[key];
        if (typeof value == "string") {
          if (key.includes("btnText")) {
            obj[key] = "超级会员";
          }
          if (key.includes("icon")) {
            obj[key] = "https://h5s.kuwo.cn/upload/pictures/20250107/9c539bac29527cb310b4ec80a4cdf743.png";
          }
          if (key.includes("Url")) {
            obj[key] = null;
          }
        } else if (typeof value == "object" && value !== null) {
          Handler.replaceVipFields(value);
        }
      }
    }
  },
  keepOnlyKeys(obj, keysToKeep) {
    if (!Utils.isObject(obj)) {
      return;
    }
    const keys = typeof keysToKeep == "string" ? [keysToKeep] : keysToKeep;
    for (const key of Object.keys(obj)) {
      if (!keys.includes(key)) {
        delete obj[key];
      }
    }
  },
  bookFakeVip: () => parsedBody?.data ? (Handler.keepOnlyKeys(parsedBody.data, ["subConfigType", "tsAdBarInfoV2"]), Utils.isObject(parsedBody.data.tsAdBarInfoV2) && Handler.keepOnlyKeys(parsedBody.data.tsAdBarInfoV2, "tsHomeWeex"), Handler.replaceVipFields(parsedBody.data), parsedBody) : null,
  bookListAdBar: () => parsedBody?.data ? (parsedBody.data.barExtendInfo = {
    barFailMsg: {
      配置匹配成功: ["!!!配置匹配成功!!!"],
      错误说明: ["key为不匹配原因，value为对应配置项id"],
      是否抢先听专辑不匹配: [28, 26],
      "配置的用户身份不包含用户身份的任意一个，当前用户身份list-[y_s_vip, y_m_vip]": [30, 27]
    }
  }, parsedBody.dataV2 = {
    jumpType: "h5popup",
    albumIdsText: "",
    iconText: "限时特惠",
    icon: "",
    userIdentity: "y_s_vip",
    title: "尊贵的SVIP您可畅听海量专辑",
    platform: "all",
    hasSvipItems: 0,
    iosJumpUrl: "https://h5app.kuwo.cn/pay/intercept-popup/index.html?fromsrc=albumBarSvip&hideBottomMargin=1&hippy=hippyInterceptPopup&MBOX_WEBCLOSE=1&popup=1&yellowBarId=25&albumId=46073118",
    adType: "",
    payType: "1,3,5,6",
    arVerCondition: 4,
    subTitle: "",
    iosVerCondition: 4,
    startTime: "2025-01-15T12:49:24.000+00:00",
    id: 25,
    btnText: "立即续费",
    updateAdmin: "7f2847047e914c589468afe892fe4fdf",
    iosVer: "11.1.2.0",
    updateTime: "2025-01-15T13:01:48.000+00:00",
    pgcCate: "",
    arJumpUrl: "https://h5app.kuwo.cn/pay/intercept-popup/index.html?fromsrc=albumBarSvip&hideBottomMargin=1&hippy=hippyInterceptPopup&MBOX_WEBCLOSE=1&popup=1&yellowBarId=25&albumId=46073118",
    priority: null,
    activeType: 3,
    supportSvipPreviewVer: 1,
    userIdText: "",
    createTime: "2025-01-15T12:52:07.000+00:00",
    name: "超会在期-非抢先听",
    endTime: "2030-01-15T12:49:27.000+00:00",
    userType: 1,
    isCover: 1,
    arVer: "11.1.2.0",
    status: 1
  }, parsedBody) : null,
  unlockSongsData(songsData) {
    if (!Utils.isObject(songsData)) {
      return songsData;
    }
    const cloned = Json.clone(songsData);
    for (const key of Object.keys(cloned)) {
      if (Utils.isObject(cloned[key])) {
        cloned[key].info = {
          limitfree: 0,
          playable: 1,
          downable: 1,
          endtime: 0,
          advert: 0,
          policy: 0,
          playright: 1,
          downright: 1,
          policytype: 1,
          unblockedToast: 1
        };
        cloned[key].policy_cost_coins_rule = {
          rule_list: [],
          cost_coins_able: 0
        };
        cloned[key].tpay = 0;
      }
    }
    return cloned;
  },
  bookSongInfo: () => parsedBody?.songs ? (parsedBody.songs = Handler.unlockSongsData(parsedBody.songs), parsedBody) : null,
  vipTheme() {
    if (!parsedBody?.data) {
      return null;
    }
    if ("vipTheme" in parsedBody.data) {
      parsedBody.data.vipTheme.type = "free";
      parsedBody.data.needBieds = null;
    } else {
      if (!("needBied" in parsedBody.data)) {
        return responseBody?.replace(/("umpUrl"\s*:\s*)"(?:\\.|[^"\\])*"/g, "$1\"\"") ?? null;
      }
      Object.assign(parsedBody.data.needBied, {
        requestUrl: "",
        btnText: null,
        rightStatus: 1,
        requestUrlType: 1
      });
    }
    return parsedBody;
  },
  dressCenterTabList: () => Array.isArray(parsedBody?.data) ? (parsedBody.data.forEach(item => {
    if (item?.tipInfo) {
      item.tipInfo = null;
    }
  }), parsedBody) : null,
  myPageVipBox: () => parsedBody?.data && Number(parsedBody.data.type) === 2 && Utils.isObject(parsedBody.data.data) ? (Object.assign(parsedBody.data.data, {
    bottomBgColor: "#412004",
    beforeBgColorStart: "#000000",
    beforeBgColorEnd: "#4E320A",
    textAndLineColor: "#FFE3A9",
    actBlockColor: "#352105",
    btnTextColor: "#412004",
    btnBgColorStart: "#FFE0A3",
    btnBgColorEnd: "#F1CA7D",
    icon: "https://h5s.kuwo.cn/upload/pictures/20251107/4214e8af8419a57099b8d05ac2531791.png",
    mainTop: "",
    memCenter: {
      id: 4,
      configType: "memCenter",
      title: "会员中心",
      subTitle: "您已尊享超级会员尊贵特权",
      btnText: "立即续费",
      jumpShow: 1,
      btnJumpShow: 1,
      jump: {
        jumpType: 1,
        jumpUrl: "https://h5app.kuwo.cn/pay/vip2/vipcenter.html?transparentTitleView=1&defBack=black&endBgColor=white&MBOX_WEBCLOSE=1&fromsrc=MyPage&hideBottomMargin=1&hippy=hippyVipCenter"
      },
      btnJump: {
        jumpType: 1,
        jumpUrl: "https://h5app.kuwo.cn/pay/vip2/vipcenter.html?transparentTitleView=1&defBack=black&endBgColor=white&MBOX_WEBCLOSE=1&fromsrc=MyPage&hideBottomMargin=1&hippy=hippyVipCenter"
      },
      unpayInfo: null,
      desc: "超会兜底配置"
    },
    actBlock: {
      id: 19,
      configType: "act",
      headImg: "",
      title: "超级会员",
      subTitle: "尊享超级会员特权",
      jumpShow: 0,
      jump: {
        jumpType: 1,
        jumpUrl: ""
      },
      desc: "会员用户"
    }
  }), parsedBody) : null,
  downloadCoupon: () => parsedBody ? (parsedBody.code = 200, parsedBody) : null,
  xmlBody: () => typeof responseBody != "string" ? null : responseBody.replace(/(content=")[^"]*(?=")/g, "$1"),
  userInfo: async () => (await commonRequest("vip/enc", responseBody))?.data ?? null,
  async playInfo() {
    const urlData = await commonRequest("kwxs", requestUrl);
    if (!urlData?.data) {
      return null;
    }
    const audioResponse = await $.request({
      url: urlData.data,
      method: "GET"
    });
    if (!audioResponse.ok) {
      return null;
    }
    const audioData = Json.parse(audioResponse.body);
    if (audioData?.data?.format === "mflac") {
      audioData.data.media_basic_info = {
        lra: 0,
        gain: 0,
        peak: 0
      };
      audioData.data.bc_data = {
        media_basic_info: audioData.data.media_basic_info,
        rid: audioData.data.rid,
        url: audioData.data.url,
        source: "",
        bitrate: audioData.data.bitrate,
        type: 0,
        ekey: audioData.data.ekey,
        format: audioData.data.format,
        duration: audioData.data.duration,
        p2p_audiosourceid: audioData.data.p2p_audiosourceid,
        sig: audioData.data.sig,
        user: audioData.data.user
      };
    }
    return audioData;
  }
};
const SCRIPT_NAME = "酷我音乐";
const SERVER_HOST = "https://kuwo.120399.xyz";

async function commonRequest(api, body) {
  const requestOptions = {
    url: SERVER_HOST,
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: Json.stringify({
      api: api,
      body: body
    })
  };
  try {
    const response = await $.request(requestOptions);
    if (!response.ok) {
      throw new Error(`Worker ${response.status}`);
    }
    const responseText = typeof response.body == "string" ? response.body : Json.stringify(response.body);
    return Json.parse(responseText);
  } catch (err) {
    console.log(`[酷我音乐] Worker 请求失败: ${err.message}`);
    return null;
  }
}
const ROUTES = [{
  host: ["mobi.kuwo.cn", "anymatch.kuwo.cn"],
  pattern: /mobi\.s\?f=kuwo/,
  handler: Handler.mobiConfig
}, {
  pattern: /vip\/enc/,
  handler: Handler.userInfo
}, {
  pattern: /vip\/v\d\/user\/vip/,
  handler: Handler.vipPage
}, {
  pattern: /\.pay\?newver=3/,
  handler: Handler.musicInfo
}, {
  pattern: /f=kwxs&q=/,
  handler: Handler.playInfo
}, {
  pattern: /pay\/app\/getConfigInfo/,
  handler: Handler.bookFakeVip
}, {
  pattern: /payInfo\/kwplayer\/payMiniBar/,
  handler: Handler.bookListAdBar
}, {
  pattern: /a\.p/,
  handler: Handler.bookSongInfo
}, {
  pattern: /(?:commercia\/)?vip\/(?:v2\/theme\?op=gd|player\/getStyleListByModel|hanger\/wear)/,
  handler: Handler.vipTheme
}, {
  pattern: /commercia\/vip\/dressCenter\/getTabList/,
  handler: Handler.dressCenterTabList
}, {
  pattern: /vipTab\/myTab\/base/,
  handler: Handler.myPageVipBox
}, {
  pattern: /commercia\/userAssets\/downloadCoupon\/reduce/,
  handler: Handler.downloadCoupon
}, {
  pattern: /mgxh\.s/,
  handler: Handler.xmlBody
}];
const run = async () => {
  if (requestMethod !== "OPTIONS" && requestUrl) {
    for (const route of ROUTES) {
      if ((!route.host || route.host.includes(requestHost)) && route.pattern.test(requestUrl)) {
        if (!route.handler) {
          break;
        }
        if (!responseBody) {
          break;
        }
        try {
          const result = await route.handler();
          $.done({
            body: Json.stringify(result)
          });
        } catch (err) {
          $.notify("酷我音乐", "处理错误", Utils.getErrorMessage(err));
        }
        break;
      }
    }
    $.done({});
  } else {
    $.done({});
  }
};
run();
