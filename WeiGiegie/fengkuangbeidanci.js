/* 疯狂背单词 — 疯狂背单词-英语学习常备软件
 * 原作者：WeiGiegie
 * 适配版本：2.5
 * 清理整理：Muse — 去除作者推广/Telegram 链接与无效注释，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.fengkuangapp.com
 */

var body = JSON.parse($response.body);

body.data.vip_info = {
    "id": 139,
    "title": "终身VIP",
    "subtitle": "终身VIP",
    "is_vip": 1,
    "is_permanent": 1,
    "product_id": "shark.crazyword.continuous",
    "price": "98",
    "original_price": "998",
    "continue_price": "98",
    "vip_start_time": "2026-01-01 00:00:00",
    "vip_end_time": "9999-01-01 00:00:00",
    "vip_days": 99999,
    "remain_days": 99999,
    "vip_type": 4,
    "vip_level": 10,
    "is_sale": 1,
    "time_limit": 1,
    "always": 0,
    "auto_buy": 1,
    "status": 1,
    "finish_date": "9999-01-01 00:00:00",
    "days": 999999
};

// 用户组改成VIP权限
body.data.group = 10;
body.data.role_id = 2;
// 用户名/头像
body.data.photo = "http://ykhp-user-imges.yikaobang.com.cn/Uploads/Avatar/2024/08/18/66c188e2d4fab.jpg";
$done({ body: JSON.stringify(body) });
