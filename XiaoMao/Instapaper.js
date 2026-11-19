/* Instapaper — Instapaper 会员解锁
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = www.instapaper.com
 */
// 获取相应数据并改写
var obj = $response.body
obj = 'ipsubnow=1695732913&ipsubexp=7956886942000&ipsub=1'
// 重写数据
$done({ body: obj });
