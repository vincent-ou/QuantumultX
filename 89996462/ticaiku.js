/* 题材库 — 权限
 * 原作者：89996462
 * 适配版本：9.9.9
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = miniapp.guniuniu.com
 */

var body = $response.body.replace(/vipNotifyStatus":\d/g,'vipNotifyStatus":1')
.replace(/vipType":"\d"/g,'vipType":"1"')
.replace(/vipTime":\w+/g,'vipTime":"9999-10-20 11:30:33"')
$done({ body });
