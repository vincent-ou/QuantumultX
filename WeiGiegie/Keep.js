/* Keep — keep 课程预览 直播课。会员付费课跟练 会员训练计划
 * 原作者：WeiGiegie
 * 适配版本：8.7.20
 * 清理整理：Muse — 去除作者推广与注释头，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.gotokeep.com,kit.gotokeep.com,*.gotokeep.*,120.53.74.*,162.14.5.*,42.187.199.*,101.42.124.*
 */

let body = $response.body;
// 批量替换响应中的关键字段
body = body.replace(/"memberStatus":\d+/g, '"memberStatus":1');
body = body.replace(/"username":".*?"/g, '"username":"VIP"');
body = body.replace(/"buttonText":".*?"/g, '"buttonText":""');
body = body.replace(/"hasPaid":\w+/g, '"hasPaid":true');
body = body.replace(/"downLoadAll":\w+/g, '"downLoadAll":true');
body = body.replace(/"videoTime":\d+/g, '"videoTime":0');
body = body.replace(/"startEnable":\w+/g, '"startEnable":true');
body = body.replace(/"preview":\w+/g, '"preview":false');
body = body.replace(/"errorCode":\d+/g, '"errorCode":0');
body = body.replace(/"status":\w+/g, '"status":1');
body = body.replace(/"member":\w+/g, '"member":true');
body = body.replace(/"limitFree":\w+/g, '"limitFree":true');
body = body.replace(/"limitCount":\d/g, '"limitCount":0');
body = body.replace(/"limitFreeType":"\w+/g, '"limitFreeType":""');
body = body.replace(/"free":\w+/g, '"free":true');
body = body.replace(/"userLiveMemberStatus":\w+/g, '"userLiveMemberStatus":1');
body = body.replace(/"canWatchLive":\w+/g, '"canWatchLive":true');
body = body.replace(/"userMemberAutoRenew":\w+/g, '"userMemberAutoRenew":true');
body = body.replace(/"userUseLiveMemberRights":\w+/g, '"userUseLiveMemberRights":true');
body = body.replace(/"userLiveMemberExpireTime":\d/g, '"userLiveMemberExpireTime":0');
body = body.replace(/":false/g, '":true');          // 将所有 false 改为 true
body = body.replace(/"code":\d+/g, '"code":200');   // 将错误码改为成功码

$done({ body });
