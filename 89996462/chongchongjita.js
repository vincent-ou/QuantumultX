/* 虫虫吉他 — VIP 解锁
 * 原作者：89996462
 * 适配版本：2.3.2
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑；身份字段改取真实返回（原版写入作者身份/推广），逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = cc.lzjoy.com
 */

var body = $response.body.replace(/vip":"0"/g,'vip": "1"')
.replace(/expire_date":""/g,'expire_date": "2030-11-11"')
.replace(/buy":"0"/g,'buy": "1"')
$done({ body });
