/* SimuFlight — SimuFlight 会员解锁
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.hangxing123.top
 */
let obj = JSON.parse($response.body);
obj.info.member = "1";
obj.info.memberExpire = "7955085722";
$done({ body: JSON.stringify(obj) });
