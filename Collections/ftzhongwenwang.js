/* FT中文网 — 解锁付费墙 / 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = *.cloudfront.net, ftmailbox.cn */

var obj = JSON.parse($response.body);

if(/paywall/.test($request.url)){
  Object.assign(obj, {
    "paywall": 0,
    "premium": 1,
    "expire": "4092599349",
    "standard": 1,
    "v": 2099,
    "campaign_code": "",
    "latest_duration": "yearly",
    "addon": 1
  });
}

if(/get_story_more_info/.test($request.url)){
  obj.paywall = 0;
  obj.accessright = "1";
}

$done({ body: JSON.stringify(obj) });