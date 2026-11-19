/* 地区辐射查询 — 地区辐射（空气吸收剂量率）查询推送
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = （无 MITM，定时任务脚本）
 */
const $ = new Env("XiaoMaoRadiation");

let option = { url: encodeURI("https://data.rmtc.org.cn/gis/listtype0M.html") };

$.get(option, (err, resp, response) => {
  if (response) {
    let obj = response.replace(/\s*/g, "").replace(/\\/g, "").toString();
    let start = obj.indexOf('<ulclass="dataul">');
    let end = obj.lastIndexOf("</ul>");
    let content = obj.substring(start + 18, end);
    let contentList = content.split('<liclass="datali"><divclass="divname">');
    let ReferenceValueList = [
      {
        name: "北京",
        radius1: "29.2",
        radius2: "88.9",
        mean: "32.3",
        standard: "1.6",
      },
      {
        name: "天津",
        radius1: "36",
        radius2: "99.7",
        mean: "29.7",
        standard: "0.2",
      },
      {
        name: "河北",
        radius1: "28",
        radius2: "198.7",
        mean: "33.8",
        standard: "3.1",
      },
      {
        name: "山西",
        radius1: "31.1",
        radius2: "85.7",
        mean: "38.5",
        standard: "2.6",
      },
      {
        name: "内蒙",
        radius1: "9.6",
        radius2: "186.2",
        mean: "39.3",
        standard: "2.5",
      },
      {
        name: "辽宁",
        radius1: "19.8",
        radius2: "178.3",
        mean: "30.7",
        standard: "0.9",
      },
      {
        name: "吉林",
        radius1: "18.9",
        radius2: "128.6",
        mean: "32.8",
        standard: "1.9",
      },
      {
        name: "黑龙江",
        radius1: "21.6",
        radius2: "196.9",
        mean: "32.4",
        standard: "1.1",
      },
      {
        name: "上海",
        radius1: "34.2",
        radius2: "79.5",
        mean: "28.8",
        standard: "0.6",
      },
      {
        name: "江苏",
        radius1: "33.1",
        radius2: "72.6",
        mean: "29.2",
        standard: "0.2",
      },
      {
        name: "浙江",
        radius1: "18.6",
        radius2: "149.8",
        mean: "32.4",
        standard: "1.5",
      },
      {
        name: "安徽",
        radius1: "27.5",
        radius2: "132.9",
        mean: "29.5",
        standard: "0.8",
      },
      {
        name: "福建",
        radius1: "25.9",
        radius2: "334.3",
        mean: "30.3",
        standard: "1.8",
      },
      {
        name: "江西",
        radius1: "13.7",
        radius2: "340.8",
        mean: "29.5",
        standard: "1.2",
      },
      {
        name: "山东",
        radius1: "16.9",
        radius2: "162.6",
        mean: "29.8",
        standard: "0.7",
      },
      {
        name: "河南",
        radius1: "17.5",
        radius2: "141.7",
        mean: "30.2",
        standard: "1.2",
      },
      {
        name: "湖北",
        radius1: "10.9",
        radius2: "140.3",
        mean: "31.8",
        standard: "3.0",
      },
      {
        name: "湖南",
        radius1: "21.0",
        radius2: "271.2",
        mean: "30.0",
        standard: "1.2",
      },
      {
        name: "广东",
        radius1: "17.7",
        radius2: "193.1",
        mean: "27.4",
        standard: "0.6",
      },
      {
        name: "海南",
        radius1: "17.7",
        radius2: "193.1",
        mean: "27.4",
        standard: "0.6",
      },
      {
        name: "广西",
        radius1: "10.7",
        radius2: "238.7",
        mean: "29.5",
        standard: "1.5",
      },
      {
        name: "四川",
        radius1: "2.4",
        radius2: "214.0",
        mean: "39.6",
        standard: "7.8",
      },
      {
        name: "重庆",
        radius1: "2.4",
        radius2: "214.0",
        mean: "39.6",
        standard: "7.8",
      },
      {
        name: "贵州",
        radius1: "13.1",
        radius2: "142.3",
        mean: "40.4",
        standard: "4.5",
      },
      {
        name: "云南",
        radius1: "9.9",
        radius2: "167.1",
        mean: "45.6",
        standard: "7.9",
      },
      {
        name: "西藏",
        radius1: "24.4",
        radius2: "166.0",
        mean: "121.4",
        standard: "20.0",
      },
      {
        name: "陕西",
        radius1: "25.0",
        radius2: "150.0",
        mean: "37.0",
        standard: "3.0",
      },
      {
        name: "甘肃",
        radius1: "16.9",
        radius2: "128.4",
        mean: "48.4",
        standard: "7.7",
      },
      {
        name: "青海",
        radius1: "24.7",
        radius2: "128.0",
        mean: "95.4",
        standard: "18.0",
      },
      {
        name: "宁夏",
        radius1: "38.8",
        radius2: "87.6",
        mean: "46.2",
        standard: "13.8",
      },
      {
        name: "新疆",
        radius1: "11.7",
        radius2: "326.4",
        mean: "44.0",
        standard: "10.6",
      },
    ];
    let arr = [];
    let nowTime = "";
    if (contentList.length) {
      contentList.forEach((el) => {
        if (el) {
          let nameStart = el.indexOf('html">');
          let nameEnd = el.lastIndexOf("</a>");
          let ngyStart = el.indexOf('label">');
          let ngyEnd = el.lastIndexOf("nGy/h");
          let timeStart = el.indexOf('showtime">');
          let timeEnd = el.lastIndexOf("</span>");
          nowTime = el.substring(timeStart + 10, timeEnd);
          let name = el.substring(nameStart + 6, nameEnd);
          let rv = ReferenceValueList.filter((n) => name.indexOf(n.name) != -1);
          arr.push({
            names: name,
            ngy: el.substring(ngyStart + 7, ngyEnd),
            time: nowTime,
            ...rv[0],
          });
        }
      });
      let resultText =
        "全国空气吸收剂量率（单位时间内空气吸收的辐射剂量）数据(" +
        nowTime +
        ")(强度倒序)获取成功！" +
        "\n\n";
      arr
        .sort((a, b) => b.ngy - a.ngy)
        .map((el) => {
          resultText =
            resultText +
            el.names +
            "\n" +
            "空气吸收剂量率检测值：" +
            el.ngy +
            "(nGy/h)" +
            "\n" +
            "环境地表γ辐射剂量率范围：" +
            el.radius1 +
            "~" +
            el.radius2 +
            "(nGy/h)" +
            "\n" +
            "宇宙射线剂量率均值：" +
            el.mean +
            "\n" +
            "宇宙射线剂量率标准差：" +
            el.standard +
            "\n\n";
        });
      let Instructions =
        "\n\n" +
        "空气吸收剂量率：" +
        "\n" +
        "空气吸收剂量率为未扣除仪器对宇宙射线响应部分的环境地表γ辐射剂量率，单位为戈瑞•小时-1（Gy•h-1）。空气吸收剂量率是一种可直接、快速、连续反映环境辐射水平的测量量,是环境辐射监测的一个重要组成部分。" +
        "\n\n" +
        "数据来源：" +
        "\n" +
        "主要来源于国家辐射环境监测网辐射环境自动监测站自动监测结果，监测点位包括环境质量监测点和核电厂监测点。";
      $.notify(
        "☢️XiaoMao_辐射监测",
        "🔎点击查看详情",
        resultText + Instructions
      );
      $.log(resultText + Instructions);
    } else {
      getError("_err_1" + "获取失败❗️");
    }
  } else {
    getError("_err_2" + "获取失败，请稍后再试❗️");
  }
});

function getError(params = "") {
  $.notify(
    "☢️XiaoMao_辐射监测",
    "",
    "🚧" + params,
    ""
  );
}
setTimeout(() => {
  $done({});
}, 3000);

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
