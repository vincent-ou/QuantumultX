/* 字体册 — 解锁会员 / 清理整理：Muse — 去除作者推广与原版链接，逻辑与数值与原版一致 / [rewrite_local] / [mitm] hostname = api.yonekura.cn */


var resp = JSON.parse($response.body);
const _orig = (resp.data && typeof resp.data === "object") ? resp.data : {};
const vipa = '/3.6.8/uicommon/getuser';
const vipb = '/3.7.0/uicommon/getuser';

if ($request.url.indexOf(vipa) != -1){
  resp.data = {
    "expireTime" : "4092599349",
    "vip" : "1",
    "isVip" : true,
    "lastSignTime" : "1666666666",
    "nick" : (_orig.nick || ""),
    "lastRewardTime" : "1666666666",
    "userId" : (_orig.userId || ""),
    "signDays" : "1",
    "expExpireTime" : "4092599349",
    "times" : "1666666666",
    "lastBuyTime" : "1666666666",
    "score" : "1"
  };
}

if ($request.url.indexOf(vipb) != -1){
  resp = {
  "errno": 0,
  "errmsg": "OK",
  "data": "QMA+KlsJ1sKVErCjySKlbYKqkDcGKMGxSBRJ4e9EqjehB51pq3hJNjtYDxtRw9GyPWJZ5647p1N8w+ed29LVZOkEG\/m8PbrUy8OgzcOadF7ClOTjUVog3FOISfA74mQMjLgodiX0WKIUHiml4dwfweDxcx+u1ueSXJrybyFfBCb9v9B6xXw5XIRLgBzN1UPzYvCLkDfd8+osUhJXrmjTC6GTNajy1dybs9kSFM9wTRzzqBBhjqcjY5POKrW9OQSI9dF0C8niTT5UPhwV5INmvA2o3LcmUoT9qCXMTJpL+JuFv9DRK\/pN5NpcmCt6cyAbDChUbz1MNkhN+jqGXYBG+cTuOs8+MUVNLkf6g9JwCEQ="};
}

$done({body : JSON.stringify(resp)});
