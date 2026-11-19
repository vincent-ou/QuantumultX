/* 凯格尔运动 — 凯格尔运动pro-pc肌-盆底肌修复锻炼
 * 原作者：WeiGiegie
 * 适配版本：1.5
 * 清理整理：Muse — 去除作者推广/Telegram 链接与无效注释，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = ioskgeyd.lmkaiger.sanwubeixin.cn
 */

var body = $response.body; 
let obj = JSON.parse($response.body);
obj.data.isVip = true,
obj.data.vip_type = 1,
obj.data.avatar = "https://viiddo.vedioas.com/data/20241014/438ea2d1e5b62d232970d8ca6e46bef3.jpeg"
obj.data.vip_time = 32493834549
$done({body: JSON.stringify(obj)});
