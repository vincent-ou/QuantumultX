/* 小习惯 — 解锁会员
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = xianbeikeji.com */


var resp=JSON.parse($response.body);resp.data.userInfo.vipFlag=1,$done({body:JSON.stringify(resp)});
