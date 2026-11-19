/* 一木清单 — VIP 解锁
 * 原作者：89996462
 * 适配版本：1.1.3
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = yimutodo.com
 */

var body = $response.body.replace(/memberType":"\w+"/g,'memberType":"YEAR"')
.replace(/memberExpiredTime":\w+/g,'memberExpiredTime":4092599349000')
.replace(/class":".*?"/g,'class":"com.tian.OneWoodList.year.48"')
$done({ body });
