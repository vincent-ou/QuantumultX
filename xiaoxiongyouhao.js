/*
小熊油耗 — 解锁 VIP

软件版本：3.4.9（原版更新时间 2023-9-1）
清理整理：Muse — 仅把脚本地址换成本仓库，逻辑未改。
           vip_state → 2，membership_days → 888，到期 9999年08月31日。

[rewrite_local]
^http[s]?:\/\/www.xiaoxiongyouhao.com\/api\/vip\/index.php url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/xiaoxiongyouhao.js

[mitm]
hostname = www.xiaoxiongyouhao.com
*/


var body = $response.body.replace(/vip_state":\d/g,'vip_state":2')
.replace(/membership_days":\d+/g,'membership_days":888')
.replace(/vip_valid_till_date":".*?"/g,'vip_valid_till_date":"9999年08月31日"')
$done({ body});
