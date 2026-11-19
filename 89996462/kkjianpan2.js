/* KKJianPan2 — 无限变声、文字转语音次数
 * 原作者：89996462
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = kk.weshine.im
 */

const reqUrl = $request.url;
let resBody = JSON.parse($response.body || "{}");

if (reqUrl.includes("checkCount") || reqUrl.includes("consumeCount")) {
    if (resBody.data) {
        resBody.data.totalCount = 999;
        resBody.data.currCount = 999;
    }
} else if (reqUrl.includes("createTtsAudio")) {
    if (resBody.data) {
        resBody.data.freeCount = 999;
    }
}

$done({
    body: JSON.stringify(resBody)
});
