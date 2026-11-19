/* KKJianPan — 无限变声/文字转语音 + 广告净化
 * 原作者：89996462
 * 适配版本：未注明
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = kk.weshine.im, kk-flow.weshine.im, kkgif.weshine.im, api-access.pangolin-sdk-toutiao.com, api-access.pangolin-sdk-toutiao1.com, api-access.pangolin-sdk-toutiao-b.com, gromore.pangolin-sdk-toutiao.com, open.e.kuaishou.com, *.anythinktech.com, *.metricslinks.com, mi.gdt.qq.com, win.gdt.qq.com, sdk.e.qq.com, sdkquic.e.qq.com, v3.gdt.qq.com, c3.gdt.qq.com, pgdt.ugdtimg.com, adsmind.ugdtimg.com, log-api.pangolin-sdk-toutiao.com, log-api.pangolin-sdk-toutiao-b.com, toblog.ctobsnssdk.com, sdk.beizi.biz, *.yunxish.com, *.hookspf.com, *.hubcloud.com.cn, *.ad-scope.com.cn
 */

const host = ($request.hostname || "").toLowerCase();
const reqUrl = $request.url;

function isObj(v) {
    return v && typeof v === "object" && !Array.isArray(v);
}

function isAdItem(node) {
    if (!isObj(node)) return false;
    if (node.is_ad === 1 || node.is_ad === true) return true;
    if (node.isAd === 1 || node.isAd === true) return true;
    if (node.ad_flag === 1) return true;
    const t = String(node.item_type || node.card_type || node.flow_type || node.content_type || node.type || "").toLowerCase();
    if (t === "ad" || t === "ads" || t === "advert" || t === "advertise") return true;
    if (t.includes("ad_item") || t.includes("aditem")) return true;
    if (node.ad_info || node.adInfo || node.ad_data || node.adData) return true;
    if (node.adsite || node.ad_id || node.adid) {
        if (node.nickname || node.avatar || node.content || node.title) return false;
        return true;
    }
    return false;
}

function stripFeedAds(root) {
    if (Array.isArray(root)) {
        return root.filter((item) => !isAdItem(item)).map((item) => {
            if (isObj(item) || Array.isArray(item)) return stripFeedAds(item);
            return item;
        });
    }
    if (!isObj(root)) return root;
    Object.keys(root).forEach((key) => {
        const val = root[key];
        if (Array.isArray(val)) {
            if (key === "list" || key === "feeds" || key === "items" || key === "data" || key === "flow_list" || key === "discover_list" || key === "recommend_list" || /list|feed|flow|discover|recommend/i.test(key)) {
                root[key] = stripFeedAds(val);
            } else {
                root[key] = val.map((item) => stripFeedAds(item));
            }
        } else if (isObj(val) || Array.isArray(val)) {
            root[key] = stripFeedAds(val);
        }
    });
    return root;
}

function patchGlobalAd(data) {
    if (!isObj(data)) return;
    Object.keys(data).forEach((slotName) => {
        const slot = data[slotName];
        if (!slot || typeof slot !== "object") return;
        Object.keys(slot).forEach((pos) => {
            const item = slot[pos];
            if (!item || typeof item !== "object") return;
            item.status = 0;
            item.adid = "";
            item.ad_count = "0";
            item.ad_city_bj = 0;
        });
    });
}


if (host.includes("pangolin-sdk-toutiao") && reqUrl.includes("/api/ad/union/")) {
    $done({
        body: JSON.stringify({
            request_id: "KK-NO-AD-" + Date.now(),
            status_code: 20001,
            reason: 106,
            desc: "no fill"
        })
    });
}

// 快手联盟
if (host.includes("open.e.kuaishou.com") && reqUrl.includes("/rest/e/")) {
    $done({
        body: JSON.stringify({
            llsid: 0,
            result: 1,
            errorMsg: "OK",
            egid: "",
            hasMore: false,
            interval: 120,
            feeds: [],
            ad: [],
            impAdInfo: []
        })
    });
}

let resBody;
try {
    resBody = JSON.parse($response.body || "{}");
} catch (e) {
    $done({});
}


if (reqUrl.includes("checkCount") || reqUrl.includes("consumeCount")) {
    if (resBody.data) {
        resBody.data.totalCount = 999;
        resBody.data.currCount = 999;
        resBody.data.remainCount = 999;
    }
} else if (reqUrl.includes("createTtsAudio")) {
    if (resBody.data) {
        resBody.data.freeCount = 999;
    }
}

else if (reqUrl.includes("/GlobalAd")) {
    if (resBody.data) patchGlobalAd(resBody.data);
} else if (reqUrl.includes("/AdDetail")) {
    resBody.data = [];
} else if (reqUrl.includes("/advpricecollect")) {
    resBody.data = true;
}

else if (host.includes("kk-flow.weshine.im") || host.includes("kkgif.weshine.im")) {
    if (resBody.data !== undefined) resBody.data = stripFeedAds(resBody.data);
    else stripFeedAds(resBody);
}

$done({
    body: JSON.stringify(resBody)
});
