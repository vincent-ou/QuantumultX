/* 绘影字幕 — 解锁会员 / 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = api.bluepulse.cn */


var resp = JSON.parse($response.body);

Object.assign(resp.data, {
    "isAppVip" : 1,
    "appVipText" : "您已经是VIP会员",
    "registerTime" : 4092599349000
});

$done({ body: JSON.stringify(resp) });
