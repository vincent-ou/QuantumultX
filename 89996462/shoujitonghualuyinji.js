/* 手机通话录音机 — VIP 解锁
 * 原作者：89996462
 * 适配版本：5.12.2
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.tapeacall.com
 */

var objc = JSON.parse($response.body);

    objc = 
{"recordings":{"expiry":"2099-10-10T00:53:59Z","is_active":true},"transcriptions":{"expiry":"2099-10-10T00:53:59Z","is_active":true},"trial_skus":["lite.trec.grpV.7day.trial.yearly.59_99","lite.rec.grpEE.7day.trial.yearly.39_99"],"account_standing":"good_standing"}

$done({body : JSON.stringify(objc)});
