/* 配音秀 — 解锁会员
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = iosapi.peiyinxiu.com */


var resp = JSON.parse($response.body); 
const vipa = '/GetMyInfo';
const vipb = '/GetVipDetail';
const vipc = '/GetUserSpaceInfo';

//会员信息
if ($request.url.indexOf(vipa) != -1){
  resp.data.is_vip = 1;
  resp.data.vip_end_time = "2099-09-09 09:09:09";
  resp.data.end_time = "2099-09-09 09:09:09";
  resp.data.gold = 999999;
  resp.data.gold2 = 999999;
  resp.data.fanscount = 999999; //粉丝
  resp.data.followcount = 999999; //关注
  resp.data.filmcount = 999; //作品
  resp.data.invite_coopera_count = 999;//合作
  resp.data.sourcecount = 999;//素材
  resp.data.is_can_apply = 1;
  resp.data.verified = 1;
  resp.data.vipNoticeCode = 2;
  resp.data.avatar_tool_id = 1;
  resp.data.isExposure = 1;
  resp.data.verifieds = [1];
}

//开通会员面板
if ($request.url.indexOf(vipb) != -1){
  resp.data.is_vip = 1;
  resp.data.isRenewal = 1;
  resp.data.vip_end_time = "2099-09-09 09:09:09";
  resp.data.end_time = "2099-09-09 09:09:09";
  resp.data.eventEndText = "2099-09-09 09:09:09";
  resp.data.vipLevel = 1;
  resp.data.is_can_apply = 1;
  resp.data.tools.status = 1;
  resp.data.avatar_tool_id = 1;
}

//用户信息
if ($request.url.indexOf(vipc) != -1){
  resp.data.is_vip = 1;
  resp.data.verified = 1;
  resp.data.badgeToolId = true;
  resp.data.gold = 999999;
  resp.data.gold2 = 999999;
  resp.data.perform_level =99; //演绎等级
  resp.data.scriptwriter_level = 99; //制作等级
  resp.data.good_count = 999999; //点赞
  resp.data.forward_count = 999999; //转发
  resp.data.union_count = 999999; //社团
  resp.data.fanscount = 999999; //粉丝
  resp.data.followcount = 999999; //关注
  resp.data.rank_count = 999999; //上榜
  resp.data.badge_count = 999999; //徽章
  resp.data.topic_count = 999999; //帖子
  resp.data.live_count = 999999; //语聊
  resp.data.filmcount = 999; //作品
  resp.data.invite_coopera_count = 999;//合作
  resp.data.sourcecount = 999;//素材
  resp.data.space_tool_id = 1;
}

$done({body : JSON.stringify(resp)});
