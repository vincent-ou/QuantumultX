/* 熊猫脑洞小说 — VIP 解锁
 * 原作者：89996462
 * 适配版本：2.14
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = xiaoshuo.xmxsapp.com
 */

var body = $response.body.replace(/is_vip":"\d"/g,'is_vip":"1"')
.replace(/vip_show_type":"\d"/g,'vip_show_type":"1"')
.replace(/vip_privilege_desc":"\w+"/g,'vip_privilege_desc":"9999-09-09到期"')
$done({ body });
