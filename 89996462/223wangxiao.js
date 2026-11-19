/* 223WangXiao — 223网校——观看
 * 原作者：89996462
 * 适配版本：3.7.1
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.233.com
 */

var body = $response.body.replace(/freelistenTf":\d/g,'freelistenTf":1')
$done({ body });
