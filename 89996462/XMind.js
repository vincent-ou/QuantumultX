/* XMind — VIP 解锁（sojson 已还原）
 * 原作者：89996462
 * 适配版本：3.2.10
 * 清理整理：Muse — sojson 混淆已还原为明文，去掉作者推广与原版链接，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = www.xmind.cn
 */

var body = $response.body;
var objk = JSON.parse(body);

objk = {"raw_data": "DBcBHgojrvPgruIJMfb4KK/76CmjxSHSp9KipRwOnQUuf+Gt2FncFUzNvxZydUeXEzDZt/XWEm91lHFYrvT0f2AFap2L4psLI/34sKU9VLGH7kFsBYlexU/nifBtosMJqQxL4TU1pjvjl+1uyWsFAeGR42aEnVhQWgvJB5Ovcd0=", "license": {"status": "sub", "expireTime":3070928235000}, "_code": 200}
	

body = JSON.stringify(objk);

$done({body});
