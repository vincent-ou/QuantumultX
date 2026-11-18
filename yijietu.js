/*
易截图2 — 解锁会员

软件版本：1.2.2（原版更新时间 2023-8-16）
清理整理：Muse — 仅把脚本地址换成本仓库，并去掉原版把 group 改成作者宣传文案的自我宣传。
           vip → "1"，group_id → "3"。
           2026-11-18 修复：后端域名从 1jietu.com 换成 jietu6.com，老规则一条都命中不了；
           规则改成同时覆盖两个域名、全路径。/apiv2/user 在新域名上仍存在（POST 带参数，
           直接 GET 会返回 404），vip/group_id 改写仍生效，验证：会员去水印显示 已去水印。
           2026-11-18 回退：把 /apiv2/version 伪造成 0.0.1/0 后，App 掉进精简模式——
           「我的」没了、首页很多功能消失（疑似 App/服务端按版本号给精简配置）；更新弹窗
           改用 reject 规则直接挡掉版本请求（见 snippet，reject 须排在改写规则前面），
           不再伪造版本号。藏钱包的 show_wallet_proxy 改写也一并撤掉，等恢复后再单独试。

[rewrite_local]
https://jietu6.com/apiv2/version url reject
^http[s]?:\/\/.*(1jietu|jietu6)\.com\/.* url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/yijietu.js

[mitm]
hostname = 1jietu.com, *.1jietu.com, jietu6.com, *.jietu6.com
*/


var body = $response.body.replace(/vip":"\d"/g, 'vip":"1"').replace(/group_id":"\d"/g, 'group_id":"3"');
$done({ body });
