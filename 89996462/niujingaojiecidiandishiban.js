/* 牛津高阶词典第十版 — 牛津高阶词典第十版
 * 原作者：89996462
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = oxfordx.cp.com.cn
 */

var body = JSON.parse($response.body);

body.data.user.is_vip = 1;
body.data.user.expire_date = "9999-12-31 04:01:05";

$done({ body: JSON.stringify(body) });
