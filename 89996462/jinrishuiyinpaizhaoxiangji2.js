/* 今日水印拍照相机 — VIP 解锁
 * 原作者：89996462
 * 适配版本：1.7
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = water-fst.yifanxinmei.com
 */

var body = $response.body.replace(/vip_expire_date":\d+/g,'vip_expire_date":8888888888000')
.replace(/vip":\d/g,'vip":1')
$done({ body });
