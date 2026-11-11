# 考试宝 QX 规则 (自托管)

[mitm]
hostname = api.ankianki.com

[rewrite_local]
https:\/\/api\.ankianki\.com url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/ksb-debug469.js
https:\/\/api\.ankianki\.com\/banner\/get url reject-200
https:\/\/api\.ankianki\.com\/popupAd\/get url reject-200
https:\/\/api\.ankianki\.com\/popup\/get url reject
https:\/\/api\.ankianki\.com\/ad url reject-200

# 拦截开屏广告 SDK(只拦广告接口域名,不拦通用 CDN,不会影响其他 App 的正常内容)
(snssdk\.com|isnssdk\.com|pangle\.cn|byteoversea\.com|oceanengine\.com|gdt\.qq\.com|gdtimg\.com|mobads\.baidu\.com|pos\.baidu\.com|ksapisrv\.com|sigmob\.com|mintegral\.com) url reject
