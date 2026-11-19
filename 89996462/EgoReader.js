/* EgoReader — 解锁订阅
 * 原作者：89996462
 * 适配版本：4.3.9
 * 清理整理：Muse — 去作者写死的用户名 @yuanxsxs，改为保留真实返回、只写会员类型与到期时间，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.pxmage.com
 */

let obj = JSON.parse($response.body || '{}');
obj.data = obj.data || {};
obj.data.membershipType = "subscription";
obj.data.expireAt = 0x3b9cf9b21f3;
$done({ body: JSON.stringify(obj) });
