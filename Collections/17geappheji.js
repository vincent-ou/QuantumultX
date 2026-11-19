/* 17个APP合集 — 17 个 App 合集解锁 / 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = *api.quthing.com */

var body = $response.body;

body = body.replace(/\"trialPeriod":\w+/g, '\"trialPeriod":true');

body = body.replace(/\"buttonTip":"(.*?)"/g, '\"buttonTip":"已解锁"');

body = body.replace(/\"newButtonTitle":"(.*?)"/g, '\"newButtonTitle":"已解锁会员"');

body = body.replace(/\"buttonTitle":"(.*?)"/g, '\"buttonTitle":"已解锁会员"');

body = body.replace(/\"vipMessage":"(.*?)"/g, '\"vipMessage":"终身会员"');

body = body.replace(/\"cnButtonTip":"(.*?)"/g, '\"cnButtonTip":"已解锁会员"');

body = body.replace(/\"vipHighlight":"(.*?)"/g, '\"vipHighlight":""');

body = body.replace(/\"trialDays":"(.*?)"/g, '\"trialDays":"99999"');

body = body.replace(/\"vipType":\d+/g, '\"vipType":3');

body = body.replace(/\"seniorVipType":\d+/g, '\"seniorVipType":3');

body = body.replace(/\"courseVipType":\d+/g, '\"courseVipType":3');

body = body.replace(/\"validVip":\w+/g, '\"validVip":true');

body = body.replace(/\"validSeniorVip":\w+/g, '\"validSeniorVip":true');

body = body.replace(/\"validCourseVip":\w+/g, '\"validCourseVip":true');

body = body.replace(/\"canEnterCourseIfOldVip":\w+/g, '\"canEnterCourseIfOldVip":true');

body = body.replace(/\"unlocked":false/g, '\"unlocked":true');

body = body.replace(/\"vipFree":\w+/g, '\"vipFree":false');

body = body.replace(/\"cost":\d+/g, '\"cost":0');

body = body.replace(/\"expireTime":\d+/g, '\"expireTime":4092599349000');

body = body.replace(/\"seniorExpireTime":\d+/g, '\"seniorExpireTime":4092599349000');

body = body.replace(/\"courseVipExpireTime":\d+/g, '\"courseVipExpireTime":4092599349000');

body = body.replace(/\"expiredDays":\d+/g, '\"expiredDays":999999');

body = body.replace(/\"status":\d+/g, '\"status":1');

body = body.replace(/\"vipCount":\d+/g, '\"vipCount":999999');

body = body.replace(/\"showText":".*?"/g, '\"showText":"2099.9.9到期"');

body = body.replace(/\"lastBuySkuName":".*?"/g, '\"lastBuySkuName":"partnertrainingai_year_vip"');

$done({body});
