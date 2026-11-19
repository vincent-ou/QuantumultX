/* 水印猫 — VIP 解锁
 * 原作者：89996462
 * 适配版本：未注明
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑；身份字段改取真实返回（原版写入作者身份/推广），逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = watersymaoa.yunxiaoguo.cn
 */

const url = $request.url;

if (url.includes("/user/info")) {
    let body = $response.body;
    body = body.replace(/"isPurchasedSubscribe":\d+/g, '"isPurchasedSubscribe":1');
    body = body.replace(/"waterVipInfo":null/g, '"waterVipInfo":{"subscribeCycle":-1,"beginTime":"2025-09-09 09:09:09","firstOpenTime":"2025-09-09 09:09:09","freeTimes":0,"userSign":"D-ej8OAp7SY","expireTime":"2999-09-09 09:09:09","typeName":"终身会员","remainDays":9,"sign":"wa44coNPDkg","createTime":"2025-09-09 09:09:09"}');
    body = body.replace(/"waterVipInfo":{[^}]*}/g, '"waterVipInfo":{"subscribeCycle":-1,"beginTime":"2025-09-09 09:09:09","firstOpenTime":"2025-09-09 09:09:09","freeTimes":0,"userSign":"D-ej8OAp7SY","expireTime":"2999-09-09 09:09:09","typeName":"终身会员","remainDays":9,"sign":"wa44coNPDkg","createTime":"2025-09-09 09:09:09"}');
    $done({body});
} else {
    $done({});
}
