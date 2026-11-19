/* Flo — 女性日记flo-大姨妈助手、排卵期安全期日历
 * 原作者：WeiGiegie
 * 适配版本：9.59.0
 * 清理整理：Muse — 去除作者推广与注释头，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.owhealth.com
 */

if ($request.url.includes('https://api.owhealth.com/subscriptions/v1/apple')) {
    let body = JSON.parse($response.body);
    Object.assign(body, {
        status: "active",
        transaction_id: 000000000652310,
        used_intro_gr1: true,
        auto_renew_status: false,
        expiration_date: "2999-09-09T06:42:17Z",
        features: [
            "premium",
            "premium_partnership",
            "report_for_doctor",
            "symptom_checker"
        ],
        subscription_manager: null,
    });
    $done({
        body: JSON.stringify(body)
    });
}
