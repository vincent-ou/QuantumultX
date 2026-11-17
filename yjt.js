/*******************************

脚本名称: 易截图2——解锁会员
下载地址：https://is.gd/TlHFQJ
软件版本：1.2.2
脚本作者：彭于晏💞
更新时间：2023-8-16
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序

# 自托管：仅把脚本地址换成本仓库，并去掉原版把 group 改成"彭于晏已破解"的自我宣传
# 解锁：vip -> "1"，group_id -> "3"
# 2026-11-18 修复：后端域名从 1jietu.com 换成 jietu6.com，老规则一条都命中不了；
# 规则改成同时覆盖两个域名、全路径。/apiv2/user 在新域名上仍存在（POST 带参数，
# 直接 GET 会返回 404），vip/group_id 改写仍生效，验证：会员去水印显示 已去水印。
# 2026-11-18 新增：去掉更新提示框 —— /apiv2/version 返回最新版 1.2.2/122，
# 本地版本低于它就弹窗；把版本号改成 0.0.1/0，App 认为已是最新，不再弹窗。
# 2026-11-18 新增：去掉底部「钱包」入口 —— /apiv2/app 返回的开关里有
# show_wallet_proxy:"1"，改成 "0" 试试能不能藏掉钱包入口；若 App 是写死原生
# 底部栏则改写无效（同倒班助手「游乐场」的情况），只能作罢。

*******************************

[rewrite_local]

^http[s]?:\/\/.*(1jietu|jietu6)\.com\/.* url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/yjt.js

[mitm]

hostname = 1jietu.com, *.1jietu.com, jietu6.com, *.jietu6.com

*******************************/

var url = $request.url;
var body = $response.body || "";
if (url.indexOf("/apiv2/version") !== -1) {
  body = '{"status":1,"info":{"version":"0.0.1","version_code":"0"}}';
} else {
  body = body.replace(/vip":"\d"/g, 'vip":"1"').replace(/group_id":"\d"/g, 'group_id":"3"')
    .replace(/"show_wallet_proxy":"1"/g, '"show_wallet_proxy":"0"');
}
$done({ body });
