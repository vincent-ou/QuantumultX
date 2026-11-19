/* 星晴壁纸 — 解锁订阅
 * 原作者：89996462
 * 适配版本：2.3.2
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = huyitool.jidiandian.cn
 */

var body = $response.body.replace(/member":\w+/g,'member":true')
.replace(/permanentMember":\w+/g,'permanentMember":true')
.replace(/memberDeadline":\w+/g,'memberDeadline":"2999-01-01"')
$done({ body });
