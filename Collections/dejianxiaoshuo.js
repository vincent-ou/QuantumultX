/* 得间小说 — 解锁会员
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = dj.palmestore.com */


var resp = JSON.parse($response.body);

resp.body.userInfo.unlockVipInfo = {
        "vipType" : 1,
        "vipExpire" : 4092599349,
        "expireDate" : "2099-09-09"
      };
resp.body.userInfo.vipInfo = {
        "content" : "点击进入购买会员",
        "vipType" : 1,
        "expireDate" : "2099-09-09",
        "halfScreen" : "https://dj.palmestore.com/zytc/public/index.php?ca=FreeVip.Index&source=book",
        "expireDateNew" : "2099-09-09",
        "description" : "开通会员",
        "fullScreen" : "https://dj.palmestore.com/zytc/public/index.php?ca=FreeVip.Index&showContentInStatusBar=1&source=mine",
        "vipExpire" : 4092599349};


$done({body : JSON.stringify(resp)});
