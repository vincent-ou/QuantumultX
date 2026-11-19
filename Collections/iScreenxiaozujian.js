/* iScreen小组件 — 解锁会员
 * 原作者：chxm1023
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广（作者 handle/Telegram/原版链接/短链）、去作者身份写入，保留用户自己身份字段，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = *.kuso.xyz */

var obj = JSON.parse($response.body);

obj = {
  "status" : 0,
  "data" : {
    "FeedBanner" : "3333",
    "IsandBannerAd" : 0,
    "noAds" : 1,
    "lang" : "zh",
    "review_pop_interval" : 300,
    "country" : "cn",
    "lockscreen_noVip" : "0,1",
    "SplashInter" : 300,
    "pic_lock_count" : 50,
    "showOurApp" : 1,
    "main_pop_ad_interval" : 0,
    "launchAd" : 0,
    "FeedAd" : 0,
    "BannerAd" : 0,
    "vipPopupType" : 3,
    "ai_painting" : 1,
    "ai_painting_wp" : 1,
    "activityUpdateTime" : 1687959242,
    "rewardAd" : 0,
    "Hudong_Interval" : 900,
    "ThemeFeedAd" : 4,
    "showRing" : 1
  },
  "ab" : 0
};

$done({body : JSON.stringify(obj)});