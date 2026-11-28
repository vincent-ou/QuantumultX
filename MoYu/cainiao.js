/* 菜鸟 — 净化（原菜鸟裹裹）
 * 原作者：ddgksf2013
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广、Telegram 链接与原版链接，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = *.cainiao.com, guide-acs.m.taobao.com, acs4miniapp-inner.m.taobao.com */

const version = 'V1.0.21';


var ddgksf2013=JSON.parse($response.body);if(-1!=$request.url.indexOf("mtop.cainiao.nbpresentation.protocol.homepage.get.cn"))ddgksf2013.data?.result?.dataList?.length>0&&(ddgksf2013.data.result.dataList=ddgksf2013.data.result.dataList.filter(a=>!("big_banner_area_v870"==a.type||"todo_list_v860"==a.type)));else if(-1!=$request.url.indexOf("mtop.cainiao.app.e2e.engine")){let a=["banner","activity","asset","vip","wallet"];for(let d of a)ddgksf2013.data?.data?.[d]&&delete ddgksf2013.data.data[d]}else if(-1!=$request.url.indexOf("mtop.cainiao.nbpresentation.homepage.merge.get.cn"))for(let i=0;i<4;i++){let t=`mtop.cainiao.nbpresentation.protocol.homepage.get.cn@${i}`;ddgksf2013.data?.[t]?.data?.result?.dataList?.length>0&&(ddgksf2013.data[t].data.result.dataList=ddgksf2013.data[t].data.result.dataList.filter(a=>!("big_banner_area_v870"==a.type||"todo_list_v860"==a.type)))}else -1!=$request.url.indexOf("mtop.cainiao.guoguo.nbnetflow.ads.mshow")?(ddgksf2013.data["1308"]&&delete ddgksf2013.data["1308"],ddgksf2013.data["1275"]&&delete ddgksf2013.data["1275"],ddgksf2013.data["205"]&&delete ddgksf2013.data["205"]):-1!=$request.url.indexOf("mtop.cainiao.guoguo.nbnetflow.ads.index.cn")?ddgksf2013.data?.result&&(ddgksf2013.data.result=[{}]):-1!=$request.url.indexOf("mtop.cainiao.adkeyword")&&ddgksf2013.data?.result?.adHotKeywords&&(ddgksf2013.data.result.adHotKeywords=[]);var body=JSON.stringify(ddgksf2013);$done({body});
