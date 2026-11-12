/**************************
快对作业 — 会员 + PDF捕获 + 图片捕获

仅供学习参考，请于下载后24小时内删除

使用方法：
1、QX > 右下角风车 > 重写 > 规则资源 > 引用以下脚本 > 打开资源解析器
https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/KuaiDui.js

2、该脚本使用大量全匹配，可能会消耗性能！

# 自托管说明：kd.js 已改为本仓库版本，到期时间由 2024-10-15 改为 2099-09-09


[mitm]
hostname = kd02-1253445850.file.myqcloud.com, apivip.kuaiduizuoye.com, apm.zuoyebang.com, www.kuaiduizuoye.com

[rewrite_local]
http:\/\/kd02-1253445850\.file\.myqcloud\.com\/scanimg url script-request-header https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/kd.js
https:\/\/apm\.zuoyebang\.com url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/kd.js
https:\/\/www\.kuaiduizuoye\.com url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/kd.js
https:\/\/apivip\.kuaiduizuoye\.com url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/kd.js

********************************/
