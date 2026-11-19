/* 时光短剧 — VIP 解锁
 * 原作者：89996462
 * 适配版本：20.3
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑；身份字段改取真实返回（原版写入作者身份/推广），逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = apidj.meetboxs.com
 */

var body = $response.body.replace(/vipEnabled":\w+/g,'vipEnabled":true')
$done({ body });
