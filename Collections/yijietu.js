/* 易截图 — 会员解锁（vip→"1"，group_id→"3"）；后端域名已迁到 jietu6.com，规则双域名全覆盖，更新弹窗用 reject 挡 /apiv2/version，不伪造版本号
 * 原作者：89996462
 * 适配版本：1.2.2
 * 清理整理：Muse — 去作者推广与原版链接，逻辑与数值与本地验证版一致 / [rewrite_local] / [mitm] hostname = 1jietu.com */

var body = $response.body.replace(/vip":"\d"/g, 'vip":"1"').replace(/group_id":"\d"/g, 'group_id":"3"');
$done({ body });

