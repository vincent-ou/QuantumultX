/* 555 — 去广告（首页轮播/信息流/我的页推广、缩短开屏倒计时）
 * 原作者：ddgksf2013（墨鱼）
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广、Telegram 链接与原版链接，逻辑与原版一致
 * [rewrite_local]
 * [mitm] hostname = *.qyfxgd.cn, *.weilai555.com, *.ecoliving168.com */

let obj=JSON.parse($response.body);obj.data=obj.data.filter(t=>"advert_self"!==t.layout),obj.data.forEach(t=>{t.list=t.list.filter(t=>3!==t.type)}),$done({body:JSON.stringify(obj)});
