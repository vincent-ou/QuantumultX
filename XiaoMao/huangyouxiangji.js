/* 黄油相机 — 黄油相机 VIP 解锁
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api4.bybutter.com,tcbox.baidu.com,adx-cn.anythinktech.com,bgg.baidu.com
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
let obj = JSON.parse(
  $response.body
    .replace(/\"ownership\":\"\w+\"/g, '"ownership":"free"')
    .replace(/\"remark\":\"\w+\"/g, '"remark":"使用期限：永久"')
    .replace(/\"enable\":\"\w+\"/g, '"enable":true')
    .replace(/\"usageType\":\"\w+\"/g, '"usageType":"unlimited"')
    .replace(/\"canDownloadAll\":\"\w+\"/g, '"canDownloadAll":true')
    .replace(/preview/g, "free")
    .replace(/builtin/g, "free")
    .replace(/仅限试用/g, "使用期限：永久")
    .replace(/使用期限：未知/g, "使用期限：永久")
    .replace(/false/g, "true")
);
let $XiaoMaoSvip = new Env("Butter");
let appName = `XiaoMao-黄油相机vip`;
let XiaoMaoSvip = "";
let XiaoMaoEndTime = null;
let fi = 1;
let fs = 999999;
let modelOk = 0;
let SvipDate = null;
!(async () => {
  await XiaoMaoFunction();
})()
  .catch((err) => {
    $XiaoMaoSvip.error(err);
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
    $XiaoMaoSvip.read("ButterVipYear") &&
    $XiaoMaoSvip.read("ButterVipMonth") &&
    $XiaoMaoSvip.read("ButterVipDay")
  ) {
    SvipDate = new Date(
      $XiaoMaoSvip.read("ButterVipYear") +
        "/" +
        $XiaoMaoSvip.read("ButterVipMonth") +
        "/" +
        $XiaoMaoSvip.read("ButterVipDay")
    ).getTime();
    if (!SvipDate) {
      $XiaoMaoSvip.notify(
        appName,
        "",
        "会员日期设置错误，请输入正确的日期范围!"
      );
      XiaoMaoSvip = getGoneDay(-9);
    } else {
      XiaoMaoSvip =
        $XiaoMaoSvip.read("ButterVipYear") +
        "/" +
        $XiaoMaoSvip.read("ButterVipMonth") +
        "/" +
        $XiaoMaoSvip.read("ButterVipDay");
    }
  } else {
    XiaoMaoSvip = getGoneDay(-9);
  }
  if ($XiaoMaoSvip.read("ButterFollowing")) {
    let num = parseInt($XiaoMaoSvip.read("ButterFollowing"));
    fi = num > 0 ? num : fi;
  }
  if ($XiaoMaoSvip.read("ButterFollowers")) {
    let num = parseInt($XiaoMaoSvip.read("ButterFollowers"));
    fs = num > 0 ? num : fs;
  }
  if ($XiaoMaoSvip.read("ButterModel")) {
    let num = parseInt($XiaoMaoSvip.read("ButterModel"));
    modelOk = num;
  }
  XiaoMaoEndTime = new Date(XiaoMaoSvip).getTime() / 1000;
}
if ($response.body) {
  let requestUrl = $request.url;
  if (/^https:\/\/api4\.bybutter\.com\/v4\/users?/.test(requestUrl)) {
    let arrObj = [
      {
        usageType: "unlimited",
        term: 31622400,
        id: "1",
        ownership: "temporary",
        type: "membership",
        name: "普通会员",
        endAt: XiaoMaoEndTime,
        startAt: 1674975583,
      },
    ];
    if (obj == [] || obj.length == 0) {
      obj = arrObj;
    }
    obj.hasOwnProperty("memberships") ? (obj.memberships = arrObj) : "";
    obj.hasOwnProperty("followingCount") ? (obj.followingCount = fi) : "";
    obj.hasOwnProperty("followersCount") ? (obj.followersCount = fs) : "";
    obj.hasOwnProperty("bio") ? (obj.bio = "") : "";
  } else if (
    /^https:\/\/api4\.bybutter\.com\/v4\/users\/me\/attributes?/.test(
      requestUrl
    )
  ) {
    obj["using:ai"] = true;
    obj["shop:subscriptionProducts"] = "0BUTTERVIP12MONTH";
  } else if (
    (/^https:\/\/api4\.bybutter\.com\/v4\/editor?/.test(requestUrl) ||
      /^https:\/\/api4\.bybutter\.com\/v4\/(template|template-square)?/.test(
        requestUrl
      )) &&
    obj.hasOwnProperty("data") &&
    obj.data.length > 0
  ) {
    obj.data.forEach((el) => {
      el.author.name = "XiaoMao";
      el.author.authorName = "XiaoMao";
      el.pictureSet.preview = el.pictureSet.free;
    });
  } else if (
    /^https:\/\/api4\.bybutter\.com\/v4\/templates\/.+\/dingWithGroup?/.test(
      requestUrl
    )
  ) {
    obj.hasOwnProperty("stickers") && obj.stickers.length
      ? obj.stickers.forEach((item) => {
          item.usageType = "USAGE_TYPE_UNLIMITED";
          item.ownership = "free";
          item.style = "none";
          item.paymentChannels = ["butter:free"];
          item.ownershipType = "free";
          item.enable = true;
          item.meta = {};
        })
      : "";
    obj.hasOwnProperty("strokes") && obj.strokes.length
      ? obj.strokes.forEach((item) => {
          item.usageType = "USAGE_TYPE_UNLIMITED";
          item.ownership = "free";
          item.style = "none";
          item.paymentChannels = ["butter:free"];
          item.ownershipType = "free";
          item.enable = true;
          item.meta = {};
        })
      : "";
    obj.hasOwnProperty("packets") && obj.packets.length
      ? obj.packets.forEach((item) => {
          item.downloadUrl = item.uri;
          delete item.uri;
          item.usageType = "unlimited";
          item.ownership = "free";
          item.style = "none";
          item.paymentChannels = ["butter:free"];
          item.ownershipType = "free";
          item.enable = true;
          item.meta = {};
        })
      : "";
    obj.hasOwnProperty("bubbles") && obj.bubbles.length
      ? obj.bubbles.forEach((item) => {
          item.usageType = "USAGE_TYPE_UNLIMITED";
          item.ownership = "free";
          item.style = "none";
          item.paymentChannels = ["butter:free"];
          item.ownershipType = "free";
          item.enable = true;
          item.meta = {};
        })
      : "";
    obj.hasOwnProperty("brushes") && obj.brushes.length
      ? obj.brushes.forEach((item) => {
          item.usageType = "unlimited";
          item.ownership = "free";
          item.style = "none";
          item.paymentChannels = ["butter:free"];
          item.ownershipType = "free";
          item.enable = true;
          item.meta = {};
        })
      : "";
    obj.hasOwnProperty("filters") && obj.filters.length
      ? obj.filters.forEach((item) => {
          item.usageType = "USAGE_TYPE_UNLIMITED";
          item.ownership = "free";
          item.style = "none";
          item.paymentChannels = ["butter:free"];
          item.ownershipType = "free";
          item.enable = true;
          item.meta = {};
        })
      : "";
    obj.hasOwnProperty("font") && obj.font.length
      ? obj.font.forEach((item) => {
          item.usageType = "USAGE_TYPE_UNLIMITED";
          item.ownership = "free";
          item.style = "none";
          item.paymentChannels = ["butter:free"];
          item.ownershipType = "free";
          item.enable = true;
          item.meta = {};
        })
      : "";
  } else if (
    /^https:\/\/api4\.bybutter\.com\/v4\/search\/products?/.test(requestUrl)
  ) {
    if (obj.hasOwnProperty("data")) {
      obj.data.forEach((el) => {
        if (el.hasOwnProperty("priceRemark")) {
          delete el.priceRemark;
          delete el.simpleRemark;
        }
        el.hasOwnProperty("name") ? (el.name = "XiaoMao") : "";
        el.usageType = "USAGE_TYPE_UNLIMITED";
        if (!el.hasOwnProperty("downloadUri")) {
          el.downloadUri = el.iconUri;
          delete el.uri;
        }
        el.style = "none";
        el.paymentChannels = ["butter:free"];
        el.ownershipType = "free";
        el.enable = true;
        el.meta = {};
        if (el.hasOwnProperty("price")) {
          if (el.price && el.price.length) {
            el.price.forEach((price) => {
              price.price = 0;
              price.ownershipType = "free";
              price.enable = true;
              price.style = "none";
              price.meta = {};
              price.paymentChannels = ["butter:free"];
              price.localizedOriginalPrice = "0.00";
              price.localizedPrice = "0.00";
              price.remark = "使用期限：永久";
            });
          }
        } else {
          el.price = [
            {
              enable: true,
              style: "none",
              paymentChannels: ["butter:free"],
              localizedOriginalPrice: "0.00",
              localizedPrice: "0.00",
              price: 0,
              originalPrice: 0,
              attributes: [],
              localizedUnit: "NT$",
              meta: {},
              ownershipType: "free",
            },
          ];
        }
        el.remark = "使用期限：永久";
      });
    }
  } else if (
    /^https:\/\/api4\.bybutter\.com\/v4\/shop\/shelves\/(packet|brush|font|filter|recommend-tag)?/.test(
      requestUrl
    )
  ) {
    if (obj.hasOwnProperty("data")) {
      obj.data.forEach((el) => {
        if (el.hasOwnProperty("priceRemark")) {
          delete el.priceRemark;
          delete el.simpleRemark;
        }
        el.style = "none";
        el.paymentChannels = ["butter:free"];
        el.ownershipType = "free";
        el.enable = true;
        el.meta = {};
        if (el.price.length) {
          el.price.forEach((price) => {
            price.price = 0;
            price.ownershipType = "free";
            price.enable = true;
            price.style = "none";
            price.meta = {};
            price.paymentChannels = ["butter:free"];
            price.localizedOriginalPrice = "0.00";
            price.localizedPrice = "0.00";
            price.remark = "使用期限：永久";
          });
        } else {
          el.price = [
            {
              enable: true,
              style: "none",
              paymentChannels: ["butter:free"],
              localizedOriginalPrice: "0.00",
              localizedPrice: "0.00",
              price: 0,
              originalPrice: 0,
              attributes: [],
              localizedUnit: "NT$",
              meta: {},
              ownershipType: "free",
            },
          ];
        }
        el.remark = "使用期限：永久";
      });
    }
  } else if (
    /^https:\/\/api4\.bybutter\.com\/v4\/shop\/me\/privileges?/.test(
      requestUrl
    ) &&
    modelOk
  ) {
    if (obj.hasOwnProperty("packets") && obj.packets.length) {
      obj.packets.forEach((el) => {
        el.enable = true;
        el.style = "none";
        el.remark = "使用期限：永久";
        el.paymentChannels = ["butter:free"];
      });
    }
    if (obj.hasOwnProperty("filters") && obj.filters.length) {
      obj.filters.forEach((el) => {
        el.enable = true;
        el.style = "none";
        el.remark = "使用期限：永久";
        el.paymentChannels = ["butter:free"];
      });
    }
    if (obj.hasOwnProperty("brushes") && obj.brushes.length) {
      obj.brushes.forEach((el) => {
        el.enable = true;
        el.style = "none";
        el.remark = "使用期限：永久";
        el.paymentChannels = ["butter:free"];
      });
    }
    if (obj.hasOwnProperty("fonts") && obj.fonts.length) {
      obj.fonts.forEach((el) => {
        el.enable = true;
        el.style = "none";
        el.remark = "使用期限：永久";
        el.paymentChannels = ["butter:free"];
      });
    }
    if (obj.hasOwnProperty("bubbles") && obj.bubbles.length) {
      obj.bubbles.forEach((el) => {
        el.enable = true;
        el.style = "none";
        el.remark = "使用期限：永久";
        el.paymentChannels = ["butter:free"];
      });
    }
    if (obj.hasOwnProperty("strokes") && obj.strokes.length) {
      obj.strokes.forEach((el) => {
        el.enable = true;
        el.style = "none";
        el.remark = "使用期限：永久";
        el.paymentChannels = ["butter:free"];
      });
    }
    if (obj.hasOwnProperty("sounds") && obj.sounds.length) {
      obj.sounds.forEach((el) => {
        el.enable = true;
        el.style = "none";
        el.remark = "使用期限：永久";
        el.paymentChannels = ["butter:free"];
      });
    }
    if (obj.hasOwnProperty("wallpapers") && obj.wallpapers.length) {
      obj.wallpapers.forEach((el) => {
        el.enable = true;
        el.style = "none";
        el.remark = "使用期限：永久";
        el.paymentChannels = ["butter:free"];
      });
    }
    if (obj.hasOwnProperty("features") && obj.features.length) {
      obj.features.forEach((el) => {
        el.remark = "使用期限：永久";
        el.usageType = "unlimited";
        el.ownership = "free";
      });
    }
  } else if (
    /^https:\/\/api4\.bybutter\.com\/v4\/shop\/products?/.test(requestUrl)
  ) {
    if (obj.length != undefined) {
      obj.forEach((el) => {
        el.paymentChannels = ["butter:free"];
        el.enable = true;
        el.style = "none";
        el.basePrice = 0;
        if (el.price.length) {
          el.price.forEach((price) => {
            delete price.priceRemark;
            delete price.simpleRemark;
            delete price.group;
            price.price = 0;
            price.ownershipType = "free";
            price.enable = true;
            price.style = "none";
            price.meta = {};
            price.paymentChannels = ["butter:free"];
            price.localizedOriginalPrice = "0.00";
            price.localizedPrice = "0.00";
            price.remark = "使用期限：永久";
          });
        } else {
          el.price = [
            {
              enable: true,
              style: "none",
              paymentChannels: ["butter:free"],
              localizedOriginalPrice: "0.00",
              localizedPrice: "0.00",
              price: 0,
              originalPrice: 0,
              attributes: [],
              localizedUnit: "NT$",
              meta: {},
              ownershipType: "free",
            },
          ];
        }
        if (el.items.length) {
          el.items.forEach((el) => {
            delete el.privilege.uri;
          });
        }
      });
    } else if (obj.hasOwnProperty("enable")) {
      obj.enable = true;
      obj.style = "none";
      delete obj.priceRemark;
      delete obj.simpleRemark;
      obj.remark = "使用期限：永久";
      obj.paymentChannels = ["butter:free"];
      if (obj.price.length) {
        obj.price.forEach((price) => {
          price.price = 0;
          price.ownershipType = "free";
          price.enable = true;
          price.style = "none";
          price.meta = {};
          price.paymentChannels = ["butter:free"];
          price.localizedOriginalPrice = "0.00";
          price.localizedPrice = "0.00";
          price.remark = "使用期限：永久";
        });
      } else {
        delete obj.price.priceRemark;
        delete obj.price.simpleRemark;
        obj.price = [
          {
            enable: true,
            style: "none",
            paymentChannels: ["butter:free"],
            localizedOriginalPrice: "0.00",
            localizedPrice: "0.00",
            price: 0,
            originalPrice: 0,
            attributes: [],
            localizedUnit: "NT$",
            meta: {},
            ownershipType: "free",
          },
        ];
      }
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
