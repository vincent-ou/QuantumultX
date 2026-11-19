/* 美图秀秀 — VIP 解锁（sojson 已还原）
 * 原作者：89996462
 * 适配版本：v9.6.20
 * 清理整理：Muse — sojson 混淆已还原为明文，去掉作者推广与原版链接，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.xiuxiu.meitu.com
 */

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/vip';


if (url.indexOf(vip) != -1) {
    obj.data.vip_type = 1;
obj.data.sub_biz_type = 1;
obj.data.is_valid_user = 1;
obj.data.expire_days = 8888888888;
obj.data.exchange_vip = 1;
obj.data.is_new_vipsub = 1;
obj.data.home_prompt = "您的会员将于2099/01/01过期。";

	body = JSON.stringify(obj);
}


$done({body});
