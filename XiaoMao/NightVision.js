/* Night Vision — Night Vision 年度会员解锁（Apphud）
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.apphud.com
 */
let obj = JSON.parse($response.body);

let sub = [
  {
    id: "11111111-2222-3333-4444-555555555555",
    status: "trial",
    autorenew_enabled: true,
    in_retry_billing: false,
    expires_at: "2222-02-02T02:22:00.000Z",
    cancelled_at: null,
    retries_count: 0,
    started_at: "2023-12-03T05:15:00.000Z",
    unit: "",
    units_count: "",
    active_till: "2222-02-02T02:22:00.000Z",
    product_id: "sub_yeart_nightvision",
    introductory_activated: true,
    kind: "autorenewable",
    platform: "ios",
  },
];
obj.data.results.subscriptions = sub;
$done({ body: JSON.stringify(obj) });
