/* 瑞网微视 — VIP 解锁
 * 原作者：89996462
 * 适配版本：1.0.4
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = wsapi.today365.com.cn
 */

var body = $response.body.replace(/expiredAt":".*?"/g,'expiredAt":"2099-09-21T11:55:01.939+08:00"')
.replace(/coins":\d+/g,'coins":99999')
.replace(/coins30":\d+/g,'coins30":99999')
.replace(/level":\d+/g,'level":99')
$done({ body });
