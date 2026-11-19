/* AI绘画 — VIP 解锁
 * 原作者：89996462
 * 适配版本：1.42
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = aihh.shujiaxia.com
 */

var body = $response.body.replace(/finish_time":".*?"/g,'finish_time":"永久会员"')
.replace(/free_num":\d/g,'free_num":1')
.replace(/type":\d/g,'type":2')
$done({ body });
