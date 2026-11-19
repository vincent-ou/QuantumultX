/* 解剖大师 — 解剖大师模型解锁
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = jiepou.vesal.cn
 */
// 获取相应数据并改写
var obj = JSON.parse(
  $response.body
    .replace(/\"is_charge\":\"\w+\"/g, '"is_charge":"n"')
    .replace(/\"isCharge\":\"\w+\"/g, '"isCharge":"N"')
    .replace(/\"BuySvip\":\w+/g, '"BuySvip":true')
);

let requestUrl = $request.url;
// 判断是否为匹配项
if (obj.hasOwnProperty("BuySvip")) {
  obj.BuySvip = true;
  obj.list = [
    {
      cardNo: "66666666666666",
      id: 2345677,
      endTime: "2222-02-22",
      comboCode: "ULTIMATE_ANATOMY_SVIP",
      totalDuration: 1,
      addTime: "2023-09-26",
      comboName: "解剖大师超级会员",
      mbId: 2345678,
    },
    {
      mbId: 2345678,
      endTime: "2222-02-22",
      comboCode: "ULTIMATE_ANATOMY_VIP_PC",
      addTime: "2023-09-26 21:45:18",
    },
    {
      mbId: 2345678,
      endTime: "2222-02-22",
      comboCode: "ULTIMATE_ANATOMY_SVIP",
      addTime: "2023-09-26 21:45:18",
    },
  ];
}

// 重写数据
$done({ body: JSON.stringify(obj) });
