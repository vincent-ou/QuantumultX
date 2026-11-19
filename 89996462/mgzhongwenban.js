/* MgZhongWenBan — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.3.1
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.io111.com
 */

var body = $response.body.replace(/msg_count_limit":\d+/g,'msg_count_limit":1')
.replace(/task_num":\d+/g,'task_num":888888888')
.replace(/timestamp":\d+/g,'timestamp":2999999999')
.replace(/use_num":\d/g,'use_num":99999999999')
$done({ body });
