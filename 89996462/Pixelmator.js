/* Pixelmator Photo — RevenueCat 订阅解锁（sojson 已还原）
 * 原作者：89996462
 * 适配版本：2.0.14
 * 清理整理：Muse — sojson 混淆已还原为明文，去掉作者推广与原版链接，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.revenuecat.com
 */

var body = $response.body;
var objk = JSON.parse(body);

objk = {"request_date":"2020-02-15T07:09:49Z","request_date_ms":"1581750589992","subscriber":{"entitlements":{"premium":{"expires_date":"2099-09-09T07:07:58Z","product_identifier":"com.neybox.pillow.premium.year","purchase_date":"2020-02-15T07:07:58Z"}},"first_seen":"2020-02-14T20:28:01Z","last_seen":"2020-02-14T20:28:01Z","non_subscriptions":{},"original_app_user_id":"D1D6D98B-EF51-48AF-9876-7352ABCEFD60","original_application_version":"216","original_purchase_date":"2020-02-14T20:26:59Z","other_purchases":{},"subscriptions":{"com.neybox.pillow.premium.year":{"billing_issues_detected_at":null,"expires_date":"2099-09-09T07:07:58Z","is_sandbox":false,"original_purchase_date":"2020-02-15T07:07:58Z","period_type":"trial","purchase_date":"2020-02-15T07:07:58Z","store":"app_store","unsubscribe_detected_at":null}}}}
	

body = JSON.stringify(objk);

$done({body});
