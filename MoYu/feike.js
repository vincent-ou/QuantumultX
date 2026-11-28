/* 飞客 — 帖子详情去广告
 * 原作者：ddgksf2013（墨鱼）
 * 适配版本：未注明
 * 清理整理：Muse — 去除作者推广与原版链接；逻辑里作者 handle 变量名改为 obj，逻辑与原版一致
 * [rewrite_local]
 * [mitm] hostname = *.flyert.com */

var body = $response.body;
var obj = JSON.parse(body);

if (obj.Variables.data.threaddetail) 
{
obj.Variables.data.threaddetail.tagadv = "";
	obj.Variables.data.threaddetail.threadapp_ad_video = [];
	obj.Variables.data.threaddetail.pingyouadv = "";
	obj.Variables.data.threaddetail.middleadv = "";
	obj.Variables.data.threaddetail.bottomadv = "";
	obj.Variables.data.threaddetail.appdetailadv = [];
}
//delete obj.Variables.data.threaddetail.threadapp_ad_video;
//delete obj.Variables.data.threaddetail.tagadv;
//delete obj.Variables.data.threaddetail.middleadv;
//delete obj.Variables.data.threaddetail.pingyouadv;
//delete obj.Variables.data.threaddetail.bottomadv;
//delete obj.Variables.data.threaddetail.appdetailadv;
	
$done({body: JSON.stringify(obj)});
