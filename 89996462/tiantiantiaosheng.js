/* 天天跳绳 — VIP 解锁
 * 原作者：89996462
 * 适配版本：3.0.22
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑；身份字段改取真实返回（原版写入作者身份/推广），逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.tiantiantiaosheng.com
 */

var objc = JSON.parse($response.body);
var oldData = (objc && objc.data) || {};
var oldMileage = oldData.mileage || {};

    objc = 
{"code":0,"msg":"success","data":{"is_member":true,"member_name":"VIP会员","member_expiration_time":"9999-10-02 19:58:21","medal_id":1200,"medal_picture":"https://cdn.tiantiantiaosheng.com/dataupload/uploadImg/2023-03-29/5ba753d8-022d-41db-812a-e69a6fa397c0/3cf6c566-940b-4853-b2f8-081d30c45374.png","today_ttb":false,"medal_name":"VIP会员","renew_status":true,"mileage":{"current_value":0,"next_value":5,"next_medal_id":1239,"next_medal_picture":"https://cdn.tiantiantiaosheng.com/dataupload/uploadImg/2023-06-09/87739a24-55d3-4ea3-afd5-f136b5ba43ce/9d4f98cc-f38b-4f3f-b77e-aa3842439b32.png","category":"milestone","honor_type":"s_vip","unit":"s_vip_day","title":"VIP会员"}}}

// 会员名/勋章名取真实返回，不用原版写死的作者名。
if (oldData.member_name) objc.data.member_name = oldData.member_name;
if (oldData.medal_name) objc.data.medal_name = oldData.medal_name;
if (oldMileage.title) objc.data.mileage.title = oldMileage.title;

$done({body : JSON.stringify(objc)});
