/* 一言 — 解锁会员 / 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = app.yiyan.art */


var resp = $response.body.replace(/viptype":"\d+"/g, 'viptype":"4"').replace(/banner":\[.+\]/g, 'banner":[]');$done(resp);
