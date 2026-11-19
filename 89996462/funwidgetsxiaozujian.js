/* Fun Widgets小组件 — 解锁订阅
 * 原作者：89996462
 * 适配版本：2.25.1
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = widget.haoqimiao.net
 */

var body = $response.body.replace(/vipExpiresTime":\d+/g,'vipExpiresTime":8888888888000')
.replace(/vip":\w+/g,'vip":true')
.replace(/vipType":\d/g,'vipType":4')
$done({ body });
