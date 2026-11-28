/* Stay — 去除仓库广告
 * 原作者：ddgksf2013
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广、Telegram 链接与微信号，变量 ddgksf2013 改名为 obj（逻辑不变）
 * [rewrite_local]
 * ^https?:\/\/api\.shenyin\.name\/stay-fork\/browse\/featured$ url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/MoYu/stay.js
 * [mitm] hostname = api.shenyin.name */

let obj = JSON.parse($response.body);
if (obj.biz) {
    obj.biz = Object.values(obj.biz).filter(item => !(item["type"]=="promoted"));
}
$done({ body: JSON.stringify(obj) });
