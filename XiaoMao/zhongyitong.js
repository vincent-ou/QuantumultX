/* 中医通 — 中医通题库/课程/会员解锁
 * 原作者：小帽
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广/外链与多平台兼容代码，仅保留 Quantumult X 逻辑，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = www.gsstargroup.com
 */
let obj = JSON.parse($response.body);

// 填入会员数据 loginname参数即可共享会员
// obj.loginname = "";

obj.diff = "2222222";
obj.freegold = "2222222";
obj.memberdays = "2222";
obj.package = "6";

$done({ body: JSON.stringify(obj) });
