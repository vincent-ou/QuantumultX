/* GUGA — 超级白板
 * 原作者：89996462
 * 适配版本：1.0.9
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = www.guga.co
 */

var body = $response.body;
var data = JSON.parse(body); 
data.data.level = 1;  
data.data.expire = 1; 
body = JSON.stringify(data);
$done(body);
