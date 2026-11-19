/* 蓝基因 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.0.16
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = *.lanjiyin.com.cn
 */

var body = $response.body.replace(/is_unlock":"0"/g,'is_unlock":"1"')
.replace(/is_free":"\d"/g,'is_free":"1"')
.replace(/is_show":"\d"/g,'is_show":"1"')
.replace(/is_see":"\d+"/g,'is_see":"1"')
$done({ body });
