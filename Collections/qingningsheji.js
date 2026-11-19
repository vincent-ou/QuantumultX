/* 青柠设计 — 解锁会员
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = *.qingning6.com */


var resp = JSON.parse($response.body);

const user = '/user/getUserInfo';
const tdxx = '/api/team/teamInfo';

if ($request.url.indexOf(user) != -1){
  resp.result.isTeamUserVip = 1;
  resp.result.isForeverVip = 1;
  resp.result.vipDays = 1;
  resp.result.vipExpireTime = 4092599349000;
  resp.result.isVip = 1;
  resp.result.teamVipExpireTime = 4092599349000;
  resp.result.totalVolume = 1411055000000;
  resp.result.h5DesignQuota = 99;
  resp.result.teamVipQuota = 99;
}

if ($request.url.indexOf(tdxx) != -1){
  resp.result.memberCount = 1;
  resp.result.vipMemberCount = 99;
  resp.result.currUserTeamVipQuota = 99;
  resp.result.isForever = 1;
  resp.result.vipExpireTime = 4092599349000;
  resp.result.isMember = 1;
  resp.result.vipUserQuota = 99;
}

$done({body : JSON.stringify(resp)});
