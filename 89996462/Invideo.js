/* Invideo — 解锁订阅
 * 原作者：89996462
 * 适配版本：8.5.4
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = payments.invideo.io
 */

var objc=JSON["parse"]($response["body"]);objc={'is_free_user':![],'upgrade_details':{'action_available':!![],'action_title':"Upgrade to Desktop Plan",'upgradeable_plan_ids':[0x1]},'next_renewal_date':"9999-01-07T05:44:14Z",'title':"Mobile Only",'purchase_date':'2023-01-04T05:44:16Z','includes_access_to':['Mobile\x20Pro'],'is_iap_linked':!![],'current_payment_source':"mobile",'show_next_renewal_date':!![],'duration':"YEARLY",'purchase_id':"430001312208142",'plan':"MOBILE_PRO",'status':"ACTIVE"};$done({'body':JSON["stringify"](objc)});
