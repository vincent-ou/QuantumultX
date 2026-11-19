/* 时光手帐 — VIP 解锁
 * 原作者：89996462
 * 适配版本：6.1.5
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.shouzhang.com
 */

var body = JSON.parse($response.body);

body.data.vip = true;
body.data.grade.gradeName = "时光守护者";
body.data.grade.img = "http://npic.shouzhang.com/grade_sign_9.png";
body.data.grade.userNum = 1;

$done({ body: JSON.stringify(body) });
