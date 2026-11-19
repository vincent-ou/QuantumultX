/* HelloWords背单词 — hellowords背单词-英语日语韩语法语德语西班牙语学习
 * 原作者：WeiGiegie
 * 适配版本：2.2.22
 * 清理整理：Muse — 去除作者推广与注释头，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api-cn.hellotalk8.com
 */

let obj = JSON.parse($response.body);


obj.data.purchase = 1;
obj.data.purchase_in_hellotalk = 1;
obj.data.is_life_vip = true;
obj.data.expiretime = 1735689600;
obj.data.vip_expire_time = 1735689600;
obj.data.remain_time = 9999999;   
obj.data.continuous = 9999;      
obj.data.name = "VIP Member";


$done({body: JSON.stringify(obj)});
