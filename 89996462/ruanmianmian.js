/* 软眠眠 — VIP 解锁
 * 原作者：89996462
 * 适配版本：1.5.3
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑；身份字段改取真实返回（原版写入作者身份/推广），逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = ruanmianmian.xinzhi.space
 */

var body = $response.body.replace(/is_vip":\d+/g,'is_vip":1')
.replace(/vip_type":""/g,'vip_type":"vip"')
.replace(/vip_day":\d+/g,'vip_day":99999')
.replace(/vip_expire":""/g,'vip_expire":"您当前为终身VIP，会员永不"')
.replace(/vip_expire":null/g,'vip_expire":"您当前为终身VIP，会员永不"')
$done({ body });
