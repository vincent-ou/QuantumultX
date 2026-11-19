/* in widget 超级小组件 — VIP 解锁
 * 原作者：89996462
 * 适配版本：2.4.3
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api-webclip.wdxzj.com
 */

var body = $response.body.replace(/vipType":".*?"/g,'vipType":"永久会员"')
.replace(/vipVaildTime":"\d+"/g,'vipVaildTime":"32493834549000"')
.replace(/paySigned":\d/g,'paySigned":1')
$done({ body });
