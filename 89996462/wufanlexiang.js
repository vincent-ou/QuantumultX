/* 悟饭乐享 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.1.3
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = iosv2.cjapi.wufan88.com
 */

var objc = JSON.parse($response.body);
    objc = {"error":0,"data":{"error_msg":"","is_success":true,"user_info":{"is_vip":"9A0684792021D73BE42B71491469ADFA","clean_id":"39E71CC1F4A8F59725C62BE3AAAD424E","play_token":"F0ED6D6872782A1B0A67BBD1C3257C1618919DB32B116CF8F06D8E68815ED4A043AE5F26DE7B7F50872055FD71DD5635B07CC3EB0EEC3395553BE79B824CDCA3","is_expired":0,"expired_time":1800000000},"error_code":"","data_info":[]}}
$done({body : JSON.stringify(objc)});
