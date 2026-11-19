/* 现映 — 短剧独家好剧抢先看
 * 原作者：WeiGiegie
 * 适配版本：3.0.1
 * 清理整理：Muse — 明文清理，作者身份与推广已清理，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = xianying-api.fansxiaoshuo.cn
 */
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
const p1 = "/short_play/episode_list";
const p2 = "/usercenter/client/mine_tab";

// 短剧解锁：试看完整时长 + 移除付费限制
if (url.indexOf(p1) !== -1) {
  if (obj.body && obj.body.episode_list) {
    for (var i = 0; i < obj.body.episode_list.length; i++) {
      var episode = obj.body.episode_list[i];
      // 试看时长设为完整时长
      episode.try_duration = episode.duration;
      // 解锁类型：0 = 已解锁/免费
      episode.unlock_type = 0;
      // 播放权限：1 = 可播放
      episode.can_play = 1;
      // 价格清零
      episode.price = 0;
      // 如果高清链接存在但普清为空，则补充普清链接（可选）
      if (!episode.play_url && episode.play_url_265) {
        episode.play_url = episode.play_url_265;
      }
    }
  }
  body = JSON.stringify(obj);
}
if (url.indexOf(p2) !== -1) {
  obj.body.vip_info.vip_type = 1;
  obj.body.vip_info.expire_time = 32493834549000;
  obj.body.vip_info.vip_expire = 32493834549000;
  obj.body.vip_info.vip_type = 1;
  obj.body.vip_info.vip_code = "subscription_xianying_oneyear_299yuan";
  body = JSON.stringify(obj);
}
$done({
  body: body
});