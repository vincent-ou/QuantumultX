/*
倒班助手抓包调试脚本（临时用，不解锁）
用途：记录 open.daobanzhushou.cn 的接口 URL 和返回内容，原样放行。
跑完后把圈叉日志里 [dbzs-debug] 的那几行发给我，我再写解锁脚本。
用完可删。

[rewrite_local]
^https?:\/\/open\.daobanzhushou\.cn\/.* url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/dbzs-debug.js

[mitm]
hostname = open.daobanzhushou.cn
*/

var url = $request.url;
var body = $response.body;
console.log('[dbzs-debug] URL: ' + url);
console.log('[dbzs-debug] BODY: ' + body);
$done({ body: body });
