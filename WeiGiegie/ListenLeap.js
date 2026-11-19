/* ListenLeap — listenleap-帮你听懂英语播客-通过播客学英语
 * 原作者：WeiGiegie
 * 适配版本：1.5.1
 * 清理整理：Muse — 去除作者推广与注释头，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = www.listenleap.com,api.listenleap.com
 */

var obj = JSON.parse($response.body);

if (obj.data && obj.data.user) {
    obj.data.user.vip = true;
    obj.data.user.vipType = "会员";      
    obj.data.user.vipStartTime = "2020-01-01T00:00:00Z";
    obj.data.user.vipExpireTime = "2099-12-31T23:59:59Z";
    
}

$done({body: JSON.stringify(obj)});
