/* Chic — 解锁订阅
 * 原作者：89996462
 * 适配版本：1.4.00
 * 清理整理：Muse — 还原 jsjiami/sojson 混淆为明文，去作者推广信息，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = api-sub.meitu.com
 */

var objc=JSON["parse"]($response["body"]);objc={'code':0x0,'error_code':"00000",'message':"success",'data':{'account_type':0x2,'account_id':0x8de0c691,'is_vip':!![],'valid_time':0x1d8dce0e766e,'invalid_time':0x1d8dce0e766e,'sub_type':0x2,'sub_type_name':'续期','active_product_id':0x0,'active_order_id':0x0,'active_sub_type':0x0,'active_sub_type_name':'','in_trial_period':![],'derive_type':0x1,'derive_type_name':"普通会员",'membership':{'id':0x2,'display_name':'Chic订阅会员','level':0x1,'level_name':"普通会员"}},'success':!![]};$done({'body':JSON["stringify"](objc)});
