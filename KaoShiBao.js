# 考试宝规则(自托管版,vincent-ou/QuantumultX)
# 用法:
# 1. 把 ksb-9.9.9.js 传到这个仓库根目录
# 2. 把这个规则文件也传到这个仓库根目录
# 3. 在 QX 重写 -> 规则资源里添加这个规则文件的 raw 链接,把原来别人的那条删掉:
#    https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/KaoShiBao.js

[mitm]
hostname = api.ankianki.com

[rewrite_local]
https:\/\/api\.ankianki\.com url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/ksb-debug.js
https:\/\/api\.ankianki\.com\/banner\/get url reject-200
https:\/\/api\.ankianki\.com\/popupAd\/get url reject-200
https:\/\/api\.ankianki\.com\/ad url reject-200
