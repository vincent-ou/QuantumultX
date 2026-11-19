/* 有诗 — VIP 解锁
 * 原作者：89996462
 * 适配版本：1.0.1
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = (youshiapp.com|judouapp.com|lengapp.com)
 */

var body = $response.body;
var url = $request.url;

if (url.indexOf("/api/v1/users/me") != -1) {
    body = body.replace(/member_expired_at":\w+/g,'member_expired_at":8888888888')
.replace(/last_profile_change_at":\d+/g,'last_profile_change_at":8888888888')
.replace(/is_lifetime_member":\w+/g,'is_lifetime_member":true')
.replace(/last_avatar_change_at":\d+/g,'last_avatar_change_at":8888888888')
.replace(/is_member":\w+/g,'is_member":true')
}

if (url.indexOf("/api/v2/mine/profile") != -1) {
    body = body.replace(/member_expired_at":\w+/g,'member_expired_at":8888888888')
.replace(/last_profile_change_at":\d+/g,'last_profile_change_at":8888888888')
.replace(/is_lifetime_member":\w+/g,'is_lifetime_member":true')
.replace(/last_avatar_change_at":\d+/g,'last_avatar_change_at":8888888888')
.replace(/is_member":\w+/g,'is_member":true')
}

if (url.indexOf("/api/v1/mine") != -1) {
    body = body.replace(/member_expired_at":\w+/g,'member_expired_at":8888888888')
.replace(/last_profile_change_at":\d+/g,'last_profile_change_at":8888888888')
.replace(/is_lifetime_member":\w+/g,'is_lifetime_member":true')
.replace(/last_avatar_change_at":\d+/g,'last_avatar_change_at":8888888888')
.replace(/is_member":\w+/g,'is_member":true')
}


$done({ body });
