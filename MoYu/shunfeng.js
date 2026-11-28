/* 顺丰 — 去广告
 * 原作者：ddgksf2013
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广、Telegram 链接与原版链接，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = ccsp-egmas.sf-express.com */

if ($request.url.indexOf("app/ad/queryInfoFlow") != -1) {
    var ddgksf2013 = JSON.parse($response.body);
    ddgksf2013.obj = Object.values(ddgksf2013.obj).filter((item) => item.adverId==2833);
    $done({
        body: JSON.stringify(ddgksf2013),
    });
}
