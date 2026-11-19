/* 畅玩空间 — 解锁会员 / 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = play.wo1wan.com */

var obj = JSON.parse($response.body);

Object.assign(obj.info.LevelInfo, {
  "AllVipXP" : 999,
  "SVipExpires" : "2099-09-09T09:09:09Z",
  "VipLevel" : 5,
  "Svip" : 1,
  "VipExpires" : "2099-09-09T09:09:09Z",
  "Level" : 99,
  "NowXP" : 999,
  "NowVipXP" : 999,
  "AllXP" : 999,
  "NextLevel" : 999
});

$done({ body: JSON.stringify(obj) });