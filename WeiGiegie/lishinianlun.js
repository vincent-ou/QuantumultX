/* 历史年轮 — 历史年轮
 * 原作者：WeiGiegie
 * 适配版本：1.3.0
 * 清理整理：Muse — 去除作者推广与注释头，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = www.yearsmap.com:443,www.yearsmap.com,www.wordvector.com
 */

let obj = JSON.parse($response.body);

// 修改VIP状态
if (obj.data) {
    obj.data.is_vip = true;
    obj.data.vip_type = 2;
    obj.data.vip_end_time = "2099-09-02T00:00:00Z";
    obj.data.vip_expire = 4102444800; // 2099年戳示例

    if (obj.data.user_info) {
        obj.data.user_info.is_vip = true;
        obj.data.user_info.vip_type = 2;
        obj.data.user_info.vip_end_time = "2099-09-02T00:00:00Z";
        obj.data.user_info.vip_expire = 4102444800;
        obj.data.user_info.role_name = "十年会员";
        obj.data.user_info.role = "十年会员";
        obj.data.user_info.vip_info = {
            is_vip: true,
            vip_end_time: "2099-09-02T00:00:00Z",
            vip_type: 2,
            have_days: 3650,
            role: "十年会员",
            vip: true,
            vip_expire: 4102444800,
            role_name: "十年会员"
        };
        obj.data.user_info.vip = true;
        obj.data.user_info.have_days = 3650;
    }

    obj.data.have_days = 3650;
}

$done({body: JSON.stringify(obj)});
