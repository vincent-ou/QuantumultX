/* 律动鼓点舞 — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.6.6
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = gdw.xinzhi.space
 */

var body = $response.body.replace(/is_vip":\d+/g,'is_vip":1')
.replace(/vip_type":""/g,'vip_type":"vip"')
.replace(/vip_day":\d+/g,'vip_day":99999')
.replace(/vip_expire":""/g,'vip_expire":"您当前为终身VIP，会员永不"')
.replace(/vip_expire":null/g,'vip_expire":"您当前为终身VIP，会员永不"')

$done({ body });
