/* Kada阅读 — kada阅读-儿童绘本故事启蒙大全
 * 原作者：WeiGiegie
 * 适配版本：8.28.0
 * 清理整理：Muse — 去除作者推广与注释头，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = service.hhdd.com
 */

let body = $response.body;
let obj = JSON.parse(body);

obj.data.unLock = true;
obj.data.bookVip = 0;
obj.data.bookSvip = 0;

if (obj.data.collectInfo) {
    obj.data.collectInfo.subscribeStatus = 1;
}

obj.data.trialReadingPages = obj.data.pageCount;

obj.data.price = 0;
obj.data.vipPrice = 0;
obj.data.subscribed = 1;
obj.data.abilitiesFlag = 31;

if (obj.data.rating) {
    obj.data.rating.userStar = 5;
}

obj.data.freeFlag = 1;
obj.data.freeEndTime = 9999999999999;

if (obj.data.bookSrt) {
    obj.data.bookSrt.srtShowFlag = 1;
}

obj.data.abilities = ["伴读", "拼音", "字卡", "答题", "朗读"];
obj.data.subscribeFlag = 1;

if (obj.data.items && Array.isArray(obj.data.items)) {
    obj.data.items.forEach(item => {
        item.unLock = true;
        item.bookVip = 0;
        item.bookSvip = 0;
        item.trialReadingPages = item.pageCount;
        item.literacyTrialReadingPages = item.pageCount;
    });
}

$done({body: JSON.stringify(obj)});
