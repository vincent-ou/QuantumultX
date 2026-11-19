/* 医考帮 — VIP 解锁
 * 原作者：89996462
 * 适配版本：3.4.9.2
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.yikaobang.com.cn
 */

var body = $response.body.replace(/is_free_watch":"\d+"/g,'is_free_watch":"1"')
$done({ body });
