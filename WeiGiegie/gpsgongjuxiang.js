/* GPS工具箱 — gps工具箱
 * 原作者：WeiGiegie
 * 适配版本：2.7.38
 * 清理整理：Muse — 去除作者推广与注释头，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = service.gpstool.com
 */

var obj = JSON.parse($response.body);
if (obj && obj.data) {
    obj.data.is_vip = 1;
    obj.data.vip_name = "VIP会员";
    obj.data.vip_expire_date = 2099999;
    obj.data.is_super_vip = 1;
    obj.data.is_power_vip = 1;
    obj.data.group_vip = 1;
    obj.data.group_vip_expire_date = 2099999;
}
$done({body: JSON.stringify(obj)});
