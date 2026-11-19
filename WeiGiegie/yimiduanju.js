/* 薏米短剧 — 会员解锁
 * 原作者：WeiGiegie
 * 适配版本：4.1.2
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = newyimi-api.zhangyue.com
 */
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
const vipinfo = "usercenter/client/mine_tab";
const videolist = "video/client/short_play/episode_list";
if (url.indexOf(vipinfo) !== -1) {
  // VIP信息处理
  if (obj.body && obj.body.vip_info) {
    obj.body.vip_info.vip_type = 1;
    obj.body.vip_info.expire_time = 99999999999999;
    obj.body.vip_info.vip_expire = 99999999999999;
  }
  body = JSON.stringify(obj);
}
if (url.indexOf(videolist) !== -1) {
  // 视频列表处理
  if (obj.body && obj.body.episode_list && Array.isArray(obj.body.episode_list)) {
    for (var i = 0; i < obj.body.episode_list.length; i++) {
      obj.body.episode_list[i].can_play = 1;

      //obj.body.episode_list[i].unlock_type = 2;
      obj.body.episode_list[i].try_duration = 0;
    }
  }
  body = JSON.stringify(obj);
}
$done({
  body
});