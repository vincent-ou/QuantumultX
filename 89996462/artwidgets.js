/* ArtWidgets — :ArtWidgets+memo+万能播放器+万能变音器
 * 原作者：89996462
 * 适配版本：1.2.8
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = www.40sishi.com
 */

var body = $response.body.replace(/"startTime":null/g,'"startTime":1677686872')
.replace(/"state":\d/g,'"state":1')
.replace(/"forever":false/g,'"forever":true')
.replace(/"expireTime":null/g,'"expireTime":4567891235')
$done({ body });
