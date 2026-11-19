/* 优雅高定素材 — VIP 解锁
 * 原作者：89996462
 * 适配版本：未注明
 * 清理整理：Muse — 去掉作者推广与原版链接，保留改写逻辑；身份字段改取真实返回（原版写入作者身份/推广），逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = ai.yayuanshenghuo.xin
 */

const url = $request.url;
const body = $response.body;


if (url.includes('/api/user/info') || url.includes('/api/init')) {
    let obj;
    try {
        obj = JSON.parse(body);
    } catch (e) {
        $done({});
        return;
    }

    if (obj.data && obj.data.user) {
  
        let user = obj.data.user;
        user.is_vip = 1;
        user.vip_at = "2026-01-01 00:00:00";
        user.vip_exp_at = "2099-12-31 23:59:59";
        user.vip_product_id = "youyayongjiu";
        if (user.wallet) {
            user.wallet.coin = 99999;
            user.wallet.coin_total = 99999;
            user.wallet.use_coin_total = 0;
            user.wallet.balance = "99999.00";
            user.wallet.balance_total = "99999.00";
            user.wallet.withdraw_balance_total = "0.00";
        }
    }
    
    if (obj.data && obj.data.is_vip !== undefined) {
        obj.data.is_vip = true;
    }

    $done({ body: JSON.stringify(obj) });
} else {
    $done({});
}
