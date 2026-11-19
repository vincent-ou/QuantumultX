/* 地震预警 — 解锁订阅
 * 原作者：89996462
 * 适配版本：2024.3.2
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = mobile-new.chinaeew.cn
 */

var body = $response.body.replace(/endTime":\d+/g,'endTime":8888888888000')
$done({ body });
