/*
彩云天气 / 彩云天气Pro — 自托管合并版
合并自 wf021325、chxm1023、ddgksf2013 三家,去掉作者推广内容与失效的备用 token,补上 AI 额度。
功能:去开屏/横幅/活动广告,解锁 VIP/SVIP,解锁 48小时预报/卫星云图,净化发现页。

版本注意:
- 大于 7.20.2 的版本不能 MITM。先装 ≤7.20.2 旧版登录解锁,再在线升级到最新版(如 7.22.0)。
- token 为 2024 年的旧 token,可能已过期;若 48小时预报/卫星云图不生效就是 token 失效,VIP 显示与去广告不受影响。

使用:把本文件传到自己仓库,按下边的规则添加到 QX(重写引用或直接粘贴到配置文件)。

[filter_local]
# 上传信息
host, gather.colorfulclouds.net, reject

[rewrite_local]
# 开屏广告
^https:\/\/ad\.cyapi\.cn\/v2\/req\?app_name=weather url reject-dict
# 通用广告请求
^https?:\/\/ad\.cyapi\.cn\/v\d url reject-200
# 限时福利 Svip
^https:\/\/biz\.cyapi\.cn\/p\/v1\/trial_card\/info url reject-dict
# 普通版修改 VIP 后提示账号迁移
^https:\/\/biz\.cyapi\.cn\/api\/v1\/token\/device$ url reject-dict
# 亲友卡
^https:\/\/biz\.cyapi\.cn\/p\/v1\/entries url reject-dict
# 左上角推荐
^https:\/\/starplucker\.cyapi\.cn\/v3\/config$ url reject-dict
# 通知
^https:\/\/starplucker\.cyapi\.cn\/v3\/notification\/message_center url reject-dict
# 会员限时弹窗
^https:\/\/starplucker\.cyapi\.cn\/v3\/config\/cypage\/home\/conditions\/local$ url reject-dict
^https:\/\/starplucker\.cyapi\.cn\/v3\/config\/cypage\/home_activity\/conditions$ url reject-dict
^https:\/\/starplucker\.cyapi\.cn\/v3\/config\/cypage\/40day\/conditions\/local$ url reject-dict

# 赏叶赏花模块
^https:\/\/wrapper\.cyapi\.cn\/v1\/activity\?app_name=weather url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/CaiYun.js
# 解锁旧版 VIP(7.20.0 之前)
^https:\/\/biz\.cyapi\.cn\/v2\/user url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/CaiYun.js
# 卫星云图 48小时预报
^https:\/\/wrapper\.cyapi\.cn\/v1\/(satellite|nafp\/origin_images) url script-request-header https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/CaiYun.js
# 7.20.0 版本显示 VIP
^https?:\/\/biz\.cyapi\.cn\/api\/v1\/user_detail$ url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/CaiYun.js
# 7.22.0 版本 40天趋势/60天潮汐等
^https:\/\/starplucker\.cyapi\.cn\/v3\/ url script-request-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/CaiYun.js
# 发现-轮播
^https:\/\/starplucker\.cyapi\.cn\/v3\/operation\/banners\?user_type= url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/CaiYun.js
# 发现-宫格
^https:\/\/starplucker\.cyapi\.cn\/v3\/operation\/features\?user_type= url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/CaiYun.js
# 发现-官方活动
^https:\/\/starplucker\.cyapi\.cn\/v3\/campaigns$ url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/CaiYun.js
# 发现-瀑布流
^https:\/\/starplucker\.cyapi\.cn\/v3\/operation\/feeds url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/CaiYun.js
# AI 天气额度
^https?:\/\/(biz|wrapper|starplucker)\.cyapi\.cn\/.*ai\/weather url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/CaiYun.js
# 用户信息(注册天数)
^https:\/\/biz\.cyapi\.cn\/p\/v\d\/user_info url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/CaiYun.js
# 特权
^https:\/\/biz\.cyapi\.cn\/p\/v\d\/privileges url script-response-body https://raw.githubusercontent.com/vincent-ou/QuantumultX/refs/heads/main/CaiYun.js

[mitm]
hostname = *.cyapi.cn, *.caiyunapp.com
*/

var result = {};
var url = $request.url;
var headers = ObjectKeys2LowerCase($request.headers || {});

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNWY1YmZjNTdkMmM2ODkwMDE0ZTI2YmI4Iiwic3ZpcF9leHBpcmVkX2F0IjoxNzA1MzMxMTY2LjQxNjc3MSwidmlwX2V4cGlyZWRfYXQiOjB9.h_Cem89QarTXxVX9Z_Wt-Mak6ZHAjAJqgv3hEY6wpps';

if (typeof $response === "undefined") {
    // 请求阶段:给卫星云图/48小时预报和 starplucker v3 请求注入 token
    if (/v1\/(satellite|nafp\/origin_images)/.test(url)) {
        result.headers = Object.assign({}, headers, { 'device-token': token });
        if (compareVersions(headers['app-version'], '7.19.0') > 0) {
            result.headers['authorization'] = 'Bearer ' + token;
        }
    } else if (url.indexOf('starplucker.cyapi.cn/v3/') !== -1) {
        if (url.indexOf('starplucker.cyapi.cn/v3/favorite_places') === -1) {
            headers['authorization'] = 'Bearer ' + token;
            result.headers = headers;
        }
    }
    $done(result);
} else {
    // 响应阶段:按接口改写返回
    var obj = null;
    try { obj = JSON.parse($response.body); } catch (e) {}
    if (obj) {
        if (url.indexOf("/v2/user") !== -1) {
            // 旧版 VIP 解锁
            Object.assign(obj.result, { is_vip: true, svip_expired_at: 3742732800, vip_type: "s" });
            result.body = JSON.stringify(obj);
        } else if (url.indexOf('/user_detail') !== -1) {
            // 7.20.0 版本显示 VIP
            Object.assign(obj.vip_info.svip, { is_auto_renewal: true, expires_time: '3742732800' });
            result.body = JSON.stringify(obj);
        } else if (url.indexOf('v1/activity') !== -1) {
            // 赏叶赏花模块:清空活动
            result.body = compareVersions(headers['app-version'], '7.20.0') < 0
                ? '{"status":"ok","activities":[{"items":[{}]}]}'
                : '{"status":"ok","activities":[]}';
        } else if (url.indexOf('/operation/banners') !== -1) {
            // 发现-轮播:只留一条天气科普
            result.body = `{"data": [{"avatar": "https://cdn-w.caiyunapp.com/p/app/operation/prod/banner/668502d5c3a2362582a2a5da/d9f198473e7f387d13ea892719959ddb.jpg","url": "https://cdn-w.caiyunapp.com/p/app/operation/prod/article/66850143c3a2362582a2a5d9/index.html","title": "暴雨来袭，这些避险“秘籍”你学会了吗？","banner_type": "article"}],"interval": 5000}`;
        } else if (url.indexOf('/operation/features') !== -1) {
            // 发现-宫格:只留 8 个实用功能
            result.body = `{"data":[{"avatar":"https://cdn-w.caiyunapp.com/p/app/operation/prod/feature/66a881fbd428d25287131ed0/7c0bc08d8bde602523220d05c3a1f148.png","url":"https://h5.caiyunapp.com/calender","title":"万年历","feature_type":"","badge_type":""},{"avatar":"https://cdn-w.caiyunapp.com/p/app/operation/prod/feature/665579a9a16f650e019e41b0/37f5cb7e2e4bd46fe5162e8adf8cd9ff.png","url":"cy://page_driving_weather","title":"驾驶天气","feature_type":"","badge_type":""},{"avatar":"https://cdn-w.caiyunapp.com/p/app/operation/prod/feature/6556d0853aad9a16ec615563/f3d65d4e56a01de218d51bd57f236a03.png","url":"cy://page_cycling_weather","title":"骑行天气","feature_type":"","badge_type":""},{"avatar":"https://cdn-w.caiyunapp.com/p/app/operation/prod/feature/64100001aa27c7a808e3d3fd/f0377e1e49e60a2dd4d19a095c3273be.png","url":"cy://page_index_fish","title":"钓鱼指数","feature_type":"","badge_type":""},{"avatar":"https://cdn-w.caiyunapp.com/p/app/operation/prod/feature/642555ed55a01b072a6db687/ee2c1efe31ba36445779ae940c5c6901.png","url":"cy://page_index_clothing","title":"穿衣指数","feature_type":"","badge_type":""},{"avatar":"https://cdn-w.caiyunapp.com/p/app/operation/prod/feature/668cf839367625ff6748e635/3e2f27c8642a8e1a49f9619878194845.png","url":"cy://page_earthquake_view","title":"地震地图","feature_type":"","badge_type":""},{"avatar":"https://cdn-w.caiyunapp.com/p/app/operation/prod/feature/66f50b56908a75e646cf76df/1de5a65fc905b2a26c260a377bfa24c2.png","url":"https://h5.caiyunapp.com/mountain-view/list","title":"登山天气","feature_type":"","badge_type":"","badge":""},{"avatar":"https://cdn-w.caiyunapp.com/p/app/operation/prod/feature/66f50fdb908a75e646cf76e1/a57e9c6400ab6c407d565e354d3347a8.png","url":"cy://page_tide_view","title":"60天潮汐","feature_type":"","badge_type":""}]}`;
        } else if (url.indexOf('starplucker.cyapi.cn/v3/campaigns') !== -1) {
            // 发现-官方活动:清空
            result.body = '{"campaigns": []}';
        } else if (url.indexOf('/operation/feeds') !== -1) {
            // 发现-瀑布流:只留文章
            obj.data = (obj.data || []).filter(function (item) { return item && item.category_name == '文章'; });
            result.body = JSON.stringify(obj);
        } else if (url.indexOf('/ai/weather') !== -1) {
            // AI 天气额度
            Object.assign(obj, { remain: 999, subscription_remain: 999, subscription_quota: 999, addition_remain: 999, subscription_quota_end_time: 4092599349, free_remain: 999, free_quota: 999 });
            result.body = JSON.stringify(obj);
        } else if (url.indexOf('/user_info') !== -1) {
            // 注册天数
            obj.reg_days = 99999;
            result.body = JSON.stringify(obj);
        } else if (url.indexOf('/privileges') !== -1) {
            // 特权
            obj.privileges = [{ vip_type: "svip", subscription_chat_quota: 999 }];
            result.body = JSON.stringify(obj);
        }
    }
    $done(result);
}

function compareVersions(t, r) { "string" != typeof t && (t = "0"), "string" != typeof r && (r = "0"); const e = t.split(".").map(Number), n = r.split(".").map(Number); for (let t = 0; t < Math.max(e.length, n.length); t++) { const r = e[t] || 0, i = n[t] || 0; if (r > i) return 1; if (r < i) return -1 } return 0 }

function ObjectKeys2LowerCase(obj) { return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v])) };
