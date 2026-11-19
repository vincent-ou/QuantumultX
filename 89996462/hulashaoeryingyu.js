/* 呼啦少儿英语 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.23.0
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = apiv2.hula123.com
 */

var body = $response.body.replace(/is_vip":\w+/g,'is_vip":true')
.replace(/is_free_vip":\w+/g,'is_free_vip":true')

.replace(/show_free_vip_dialog":\w+/g,'show_free_vip_dialog":true')
$done({ body });
