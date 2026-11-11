# 考试宝 QX 规则 (自托管)

[mitm]
hostname = api.ankianki.com

[rewrite_local]
https:\/\/api\.ankianki\.com url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/ksb-9.9.9.js
https:\/\/api\.ankianki\.com\/banner\/get url reject-200
https:\/\/api\.ankianki\.com\/popupAd\/get url reject-200
https:\/\/api\.ankianki\.com\/ad url reject-200
