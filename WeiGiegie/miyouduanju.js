/* 蜜柚短剧 — 蜜柚短剧-触手可及的短剧世界
 * 原作者：WeiGiegie
 * 适配版本：1.0.7
 * 清理整理：Muse — 去除作者推广与注释头，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api.duoyolo.cn,ioskgeyd.lmkaiger.sanwubeixin.cn,www.shutiaomh.com,mobads.baidu.com,bgg.baidu.com,sf3-fe-tos.pglstatp-toutiao.com,cmyd-10-88.getui.com,open.e.kuaishou.com,api-access.pangolin-sdk-toutiao.com,toblog.ctobsnssdk.com,log-api.pangolin-sdk-toutiao.com,api-access.pangolin-sdk-toutiao1.com,log-api.pangolin-sdk-toutiao-b.com,api-access.pangolin-sdk-toutiao-b.com,b-gy.getui.net,gy.gepush.com,mssdk.volces.com,sdk.open.talk.getui.net,gromore.pangolin-sdk-toutiao.com,sdk.open.talk.gepush.com,adservice.sigmob.cn,sdk.open.talk.getui.com,yun.tuitiger.com,mobads-pre-config.cdn.bcebos.com,mobads-logs.baidu.com
 */

var body = $response.body; 
let obj = JSON.parse($response.body);
obj.data.memberStatus = true,
obj.data.expDate = "2999-09-09 09:09:09";
$done({body: JSON.stringify(obj)});
